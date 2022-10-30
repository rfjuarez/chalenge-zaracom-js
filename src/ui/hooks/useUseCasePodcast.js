import {UseCasePodcastStateFull} from "../../application/use-cases/podcast";
import {episodeServiceAdapter, podcastServiceAdapter} from "../../services";

const useUseCasePodcast = () => {
    // const dispatch = useDispatch();
    // const podcastRepository = podcastRepositoryAdapter(dispatch);
    // const episodeRepository = episodeRepositoryAdapter(dispatch);
    //const _useCasePodcast = useCasePodcast(podcastRepository)
    const podcastRepository = podcastServiceAdapter();
    const episodeRepository = episodeServiceAdapter();
    const _useCasePodcast = new UseCasePodcastStateFull(podcastRepository, episodeRepository)
    return {
        useCasePodcast: _useCasePodcast,
    }
}
export default useUseCasePodcast