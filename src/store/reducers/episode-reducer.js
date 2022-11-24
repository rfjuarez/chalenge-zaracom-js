import {findAllEpisodesActionTypes} from '../actions'

import {stateType} from './reducer-state';
import {SELECT_EPISODE_ACTION} from '../actions/actions-types';

const initialState = {
  status: stateType.INIT,
  selected: null,
  episodes: [],
  exception: null,
}

const episodeReducer = (state = initialState, action) => {
  switch (action.type) {
  case findAllEpisodesActionTypes.actionRequest: {
    return {
      ...state,
      status: stateType.LOADING,
    }
  }
  case findAllEpisodesActionTypes.actionSuccess: {
    return {
      ...state,
      status: stateType.SUCCESS,
      episodes: action.payload,
    }
  }
  case findAllEpisodesActionTypes.actionFailed: {
    return {
      ...initialState,
      status: stateType.FAILED,
      exception: action.exception,
    }
  }
  case SELECT_EPISODE_ACTION: {
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
export default episodeReducer;