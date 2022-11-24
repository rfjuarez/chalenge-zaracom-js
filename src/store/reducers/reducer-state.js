const stateType = {
  INIT: 'INIT',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
}
const isLoading = (status) => status === stateType.LOADING;
const isInitialized = (status) => status === stateType.INIT;
const isSuccess = (status) => status === stateType.SUCCESS;
const isFailed = (status) => status === stateType.FAILED;

const isState = (status) => ({
  loading: isLoading(status),
  initialized: isInitialized(status),
  success: isSuccess(status),
  failed: isFailed(status),
})
export {
  stateType,
  isInitialized,
  isLoading,
  isSuccess,
  isFailed,
  isState,
}