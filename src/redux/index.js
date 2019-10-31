import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../saga'
import reducer from '../reducers'

const sagaMiddleware = createSagaMiddleware();// 创建saga
const middleware = [ sagaMiddleware ];

const enhancer = applyMiddleware(...middleware);
const store = createStore( reducer, enhancer );

sagaMiddleware.run(rootSaga);

export default store;
