import {podcastServiceAdapter} from '../../services';
import {actionBuilder, requestActionBuilder, requestActionTypesBuilder} from './action-builder';
import {FLUSH_PODCAST_ACTION, SELECT_PODCAST_ACTION} from './actions-types';


const ACTION_NAME = 'FIND_ALL_PODCAST';

const findAllPodcastActionTypes = requestActionTypesBuilder(ACTION_NAME);

const findAllPodcastAction = () => requestActionBuilder(ACTION_NAME
  , podcastServiceAdapter().findAll);

const selectPodcastAction = (podcast) => actionBuilder(SELECT_PODCAST_ACTION, podcast);
const flushPodcastStoreAction = () => ({type: FLUSH_PODCAST_ACTION});


export {
  findAllPodcastActionTypes,
  findAllPodcastAction,
  selectPodcastAction,
  flushPodcastStoreAction,
};