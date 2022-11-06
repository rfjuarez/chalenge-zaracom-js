import {paths} from './paths';
import Home from '../pages/Home/Home';
import PodcastDetailed from '../pages/PodcastDetailed/PodcastDetailed';
import ListenEpisode from '../pages/ListenEpisode/ListenEpisode';

export const routes = [
  {
    path: paths.HOME,
    element: <Home/>,
    exact: true,
  },
  {
    path: paths.PODCAST_DETAILS,
    element: <PodcastDetailed/>,
    exact: true,
  },
  {
    path: paths.EPISODE,
    element: <ListenEpisode/>,
    exact: true,
  }
];