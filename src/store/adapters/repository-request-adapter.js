import {
    doneActionRequestBuilder,
    failActionRequestBuilder,
    requestActionTypesBuilder,
    sendActionRequestBuilder
} from "../actions/action-builder";


const repositoryRequestAdapter = (dispatch) => {
    return async ({type, promise}) => {
        const actionStates = requestActionTypesBuilder(type);
        dispatch(sendActionRequestBuilder(actionStates.actionRequest));
        try {
            const data = await promise();
            dispatch(doneActionRequestBuilder(actionStates.actionSuccess, data));
            return data;
        } catch (err) {
            dispatch(failActionRequestBuilder(actionStates.actionFailed, err));
            return err;
        }
    }
};
export {repositoryRequestAdapter};