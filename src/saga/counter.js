import { put, delay } from 'redux-saga/effects';

// Our worker Saga: 将执行异步的 increment 任务
export function* incrementAsync() {
    yield delay(1000);
    yield put({ type: 'INCREMENT', value:1 })
}
export function* decrementAsync() {
    yield delay(1000);
    yield put({ type: 'DECREMENT', value:1})
}

