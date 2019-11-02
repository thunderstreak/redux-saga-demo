import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import initStores from '../store'
import { counter, users } from '../reducers'
import rootSaga from '../saga'

const sagaMiddleware = createSagaMiddleware();// 创建saga
const logger = createLogger();//创建redux log
const enhancer = applyMiddleware(sagaMiddleware);

const rootReducer = combineReducers({ counter, users });

const store = createStore( rootReducer, initStores, enhancer );

sagaMiddleware.run(rootSaga);

export default store;
