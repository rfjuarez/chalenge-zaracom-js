import {useCasePodcast} from '../../application/use-cases'
import {podcastRepositoryAdapter} from "../../store/repositories";
import {useDispatch} from "react-redux";

const useUseCasePodcast = () => {
    const dispatch = useDispatch();
    const podcastRepository = podcastRepositoryAdapter(dispatch);
    const _useCasePodcast = useCasePodcast(podcastRepository)
    return {
        useCasePodcast: _useCasePodcast,
    }
}
export default useUseCasePodcast