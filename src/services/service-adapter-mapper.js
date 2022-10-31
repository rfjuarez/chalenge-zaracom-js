import {Episode, Media, Podcast} from "../application/domain/model";

const adaptersTypes = {
    EPISODE: 'Episode',
    PODCAST: 'Podcast',
}


const adapterMapper = {
    [adaptersTypes.EPISODE]: (serviceResponse) => {
        const removeSpecialCharacters = (string) => string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
        return serviceResponse?.rss?.channel?.item.map(item => {
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
                    length,
                    type,
                }
            } = enclosure;

            const media = new Media(url, type, length);
            /*
            some resources do not have a well-formed guid
            */
            return new Episode(
                removeSpecialCharacters(guid._text)
                , null
                , title._text || "Sin titulo"
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

        const getLastPosterAvailable = (item) => {
            const images = item["im:image"];
            return images[images.length - 1].label;
        }
        const getLabelOf = (object, key) => object[key].label;

        return entry.map(item => {

            return new Podcast(item.id.attributes["im:id"]
                , getLabelOf(item, "im:artist")
                , getLabelOf(item, "title")
                , getLastPosterAvailable(item)
                , getLabelOf(item, "summary"));
        })
    }
}
export {
    adapterMapper,
    adaptersTypes,
}
