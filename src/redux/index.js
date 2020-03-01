import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import initStores from '../store'
import { counter, users } from '../reducers'
import rootSaga from '../saga'

const sagaMiddleware = createSagaMiddleware();// 创建saga
const logger = createLogger();//创建redux log
const enhancer = applyMiddleware(sagaMiddleware);

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false }) : compose;
const rootReducer = combineReducers({ counter, users });

const store = createStore( rootReducer, initStores, composeEnhancers(...[enhancer]) );

sagaMiddleware.run(rootSaga);

export default store;
