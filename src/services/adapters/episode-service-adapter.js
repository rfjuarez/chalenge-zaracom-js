import {findAll} from '../api-podcast/episode-service';
import {adapterMapper, adaptersTypes} from './service-adapter-mapper';
import {serviceAdapter} from './service-adapter';
import {episodeRepositoryPort} from '../../application/use-cases';

const episodeServiceAdapter = () => ({
  ...episodeRepositoryPort,
  findAll: async (idPodcast) =>
    serviceAdapter(adapterMapper[adaptersTypes.EPISODE])(async () => findAll(idPodcast))
})

export {
  episodeServiceAdapter
}