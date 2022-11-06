import {findAll} from '../api-podcast/podcast-service';
import {adapterMapper, adaptersTypes} from './service-adapter-mapper';
import {serviceAdapter} from './service-adapter';
import {podcastRepositoryPort} from '../../application/use-cases';


const podcastServiceAdapter = () => ({
  ...podcastRepositoryPort,
  findAll: async () =>
    serviceAdapter(adapterMapper[adaptersTypes.PODCAST])(findAll)
});

export {
  podcastServiceAdapter,
}