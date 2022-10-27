//https://redux.js.org/usage/configuring-your-store

import {storage} from './storage';
import {applyMiddleware, compose, createStore} from "redux";
import loggerMiddleware from './middleware/logger'
import thunkMiddleware from 'redux-thunk'
import monitorReducerEnhancer from './enhancers/monitorReducer'

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)

export const storeInstance = createStore(storage, undefined, composedEnhancers);
