//https://redux.js.org/usage/configuring-your-store#enhancersmonitorreducerjs

const round = number => Math.round(number * 100) / 100

const monitorReducerEnhancer =
    createStore => (reducer, initialState, enhancer) => {
      const monitoredReducer = (state, action) => {
        const start = performance.now()
        const newState = reducer(state, action)
        const end = performance.now()
        const diff = round(end - start)
        
        if (process.env.NODE_ENV != 'production'){
          // eslint-disable-next-line no-console
          console.log('reducer process time:', diff)      
        }
        return newState
      }

      return createStore(monitoredReducer, initialState, enhancer)
    }

export default monitorReducerEnhancer