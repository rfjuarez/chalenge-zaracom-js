import {
  doneActionRequestBuilder,
  failActionRequestBuilder,
  requestActionTypesBuilder,
  sendActionRequestBuilder
} from '../actions/action-builder';
import log from '../../ui/utils/log-utils';

const repositoryRequestAdapter = (dispatch, defaultResponse) => {
  return async ({type, promise}) => {
    const actionStates = requestActionTypesBuilder(type);
    dispatch(sendActionRequestBuilder(actionStates.actionRequest));
    try {
      const data = await promise();
      dispatch(doneActionRequestBuilder(actionStates.actionSuccess, data));
      return data;
    } catch (err) {
      dispatch(failActionRequestBuilder(actionStates.actionFailed, err));
      log(err)
      return defaultResponse;
    }
  }
};
export {repositoryRequestAdapter};