const actionState = {
    ACTION_REQUEST: 'REQUEST',
    ACTION_SUCCESS: 'SUCCESS',
    ACTION_FAILED: 'FAILED'
}

const requestActionBuilder = (type, promise) => ({
    type,
    promise
});
const actionBuilder = (type, payload) => ({
    type,
    payload,
});

const sendActionRequestBuilder = (type) => ({type});
const doneActionRequestBuilder = (type, payload) => ({type, payload});
const failActionRequestBuilder = (type, exception) => ({type, exception});

const requestActionTypesBuilder = (actionName) => {
    const action = actionName.toUpperCase();
    const actionRequest = `${action}_${actionState.ACTION_REQUEST}`;
    const actionSuccess = `${action}_${actionState.ACTION_SUCCESS}`;
    const actionFailed = `${action}_${actionState.ACTION_FAILED}`;
    return {
        actionRequest,
        actionSuccess,
        actionFailed,
    }
}
export {
    requestActionTypesBuilder,
    requestActionBuilder,
    sendActionRequestBuilder,
    doneActionRequestBuilder,
    failActionRequestBuilder,
    actionBuilder,
} ;