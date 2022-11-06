const repositoryActionAdapter = (dispatch) => {
  return async (action) => {
    dispatch(action);
  }
};
export {repositoryActionAdapter};