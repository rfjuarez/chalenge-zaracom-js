import {findAllPodcastActionTypes} from '../actions'
import {stateType} from "./reducer-state";

const initialState = {
    status: stateType.INIT,
    podcasts: [],
    exception: null,
}

const podcastReducer = (state=initialState, action) => {
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
        default: {
            return {...state};
        }
    }

}
export default podcastReducer;