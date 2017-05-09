import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default (rootReducer) => createStore(rootReducer, applyMiddleware(thunk, logger));
