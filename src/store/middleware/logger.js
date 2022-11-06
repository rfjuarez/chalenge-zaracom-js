//https://redux.js.org/usage/configuring-your-store#middlewareloggerjs
const logger = store => next => action => {
  if (process.env.NODE_ENV === 'production')
    return next(action);
  // eslint-disable-next-line no-console
  console.info('dispatching', action)
  let result = next(action)
  // eslint-disable-next-line no-console
  console.log('next state', store.getState())
  // eslint-disable-next-line no-console
  console.groupEnd()
  return result
}

export default logger