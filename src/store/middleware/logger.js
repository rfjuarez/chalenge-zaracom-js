//https://redux.js.org/usage/configuring-your-store#middlewareloggerjs
const logger = store => next => action => {
    if (process.env.NODE_ENV === 'production')
        return next(action);

    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

export default logger