import {combineReducers} from 'redux';
import podcastReducer from './reducers/podcast-reducer';
import episodeReducer from './reducers/episode-reducer';

export const storage = combineReducers({
  podcasts: podcastReducer,
  episodes: episodeReducer,
})