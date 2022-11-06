import {episodeServiceAdapter} from '../../services';
import {actionBuilder, requestActionBuilder, requestActionTypesBuilder} from './action-builder';
import {FLUSH_EPISODE_ACTION, SELECT_EPISODE_ACTION} from './actions-types';

const ACTION_NAME = 'FIND_ALL_EPISODES';

const findAllEpisodesActionTypes = requestActionTypesBuilder(ACTION_NAME);

const findAllEpisodesAction = (idPodcast) => requestActionBuilder(ACTION_NAME
  , async ()=>(episodeServiceAdapter().findAll(idPodcast)))   ;

const selectEpisodeAction = (episode) => actionBuilder(SELECT_EPISODE_ACTION, episode);

const flushEpisodeStoreAction = ()=> ({type: FLUSH_EPISODE_ACTION});

export {
  findAllEpisodesActionTypes,
  findAllEpisodesAction,
  selectEpisodeAction,
  flushEpisodeStoreAction,
};