import { take, takeLatest, call } from 'redux-saga/effects';
import { incrementAsync, decrementAsync } from './counter'
import { USERS_HANDLERS } from './user'
import { watchAndLog } from './saga-logger'

import * as constants from '../constant'
const USERS = Object.keys(constants.Users);

export default function* rootSaga() {

    watchAndLog();

    yield takeLatest('INCREMENT_ASYNC', incrementAsync);
    yield takeLatest('DECREMENT_ASYNC', decrementAsync);
    while (true){
        const Action = yield take(USERS);
        const TaskName = USERS.find(x => x === Action.type);
        console.log(TaskName);
        yield call(USERS_HANDLERS.HANDLER_REQUEST_USERS_LOADING, { loading: true });
        const res = yield call(USERS_HANDLERS[TaskName], Action);
        console.log(res);
        yield call(USERS_HANDLERS.HANDLER_REQUEST_USERS_LOADING, { loading: false });
    }
}
