import {findAllEpisodesActionTypes} from '../actions'
import {stateType} from "./reducer-state";

const initialState = {
    status: stateType.INIT,
    episode: [],
    episodes: null,
}

const episodeReducer = (state=initialState, action) => {
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
                ...state,
                status: stateType.SUCCESS,
                episodes: action.exception,
            }
        }
        default: {
            return {...state};
        }
    }

}
export default episodeReducer;