import {findAllPodcastActionTypes} from '../actions'
import {stateType} from './reducer-state';
import {SELECT_PODCAST_ACTION} from '../actions/actions-types';

const initialState = {
  status: stateType.INIT,
  podcasts: [],
  selected: null,
  exception: null,
}

const podcastReducer = (state = initialState, action) => {
  switch (action.type) {
  case findAllPodcastActionTypes.actionRequest: {
    return {
      ...state,
      status: stateType.LOADING,
    }
  }
  case findAllPodcastActionTypes.actionSuccess: {
    return {
      ...state,
      status: stateType.SUCCESS,
      podcasts: action.payload,
    }
  }
  case findAllPodcastActionTypes.actionFailed: {
    return {
      ...state,
      status: stateType.SUCCESS,
      exception: action.exception,
    }
  }
  case SELECT_PODCAST_ACTION: {
    return {
      ...state,
      selected: action.payload,
    }
  }
  default: {
    return {...state};
  }
  }

}
export default podcastReducer;