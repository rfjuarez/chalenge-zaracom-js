import {UseCasePodcastStateFull} from '../../application/use-cases';
import {episodeRepositoryAdapter, podcastRepositoryAdapter} from '../../store/adapters';
import {useDispatch} from 'react-redux';

const useUseCasePodcast = () => {
  const dispatch = useDispatch();
  const podcastRepository = podcastRepositoryAdapter(dispatch);
  const episodeRepository = episodeRepositoryAdapter(dispatch);
  const _useCasePodcast = new UseCasePodcastStateFull(podcastRepository, episodeRepository)
  return {
    useCasePodcast: _useCasePodcast,
  }
}
export default useUseCasePodcast