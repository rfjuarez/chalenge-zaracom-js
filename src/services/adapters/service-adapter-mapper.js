import {Episode, Media, Podcast} from '../../application/domain/model';

const adaptersTypes = {
  EPISODE: 'Episode',
  PODCAST: 'Podcast',
}


const adapterMapper = {
  [adaptersTypes.EPISODE]: (serviceResponse) => {
    const removeSpecialCharacters = (string) => string.replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '');
    return serviceResponse?.rss?.channel?.item.filter(itemHasMedia => !!itemHasMedia?.enclosure).map(item => {
      const {
        title,
        pubDate,
        description,
        enclosure,
        guid,
      } = item;
      const {
        _attributes: {
          url,
          type,
        }
      } = enclosure
      const media = new Media(url, type, item['itunes:duration']._text);
      /*
                        some resources do not have a well-formed guid
                        */

      return new Episode(
        removeSpecialCharacters(guid._cdata || guid._text || '')
        , null
        , title._text || title._cdata || 'Sin titulo'
        , pubDate._text
        , description._cdata
        , media
      );
    })
  },
  [adaptersTypes.PODCAST]: (serviceResponse) => {
    const {
      feed: {
        entry
      }
    } = serviceResponse;
    //debugger
    const getLastPosterAvailable = (item) => {
      const images = item['im:image'];
      return images[images.length - 1].label;
    }
    const getLabelOf = (object, key) => object[key].label;

    return entry.map(item => {

      return new Podcast(item.id.attributes['im:id']
        , getLabelOf(item, 'im:artist')
        , getLabelOf(item, 'im:name')
        , getLastPosterAvailable(item)
        , getLabelOf(item, 'summary'));
    })
  }
}
export {
  adapterMapper,
  adaptersTypes,
}
