import { call, put, select } from 'redux-saga/effects';
import * as userServices from '../services';

// 获取列表
function* fetchData(payload) {
    const { page, limit } = payload;
    const { data, headers } = yield call(userServices.fetch, { page, limit });

    yield put({
        type: 'REQUEST_USERS_FETCH',
        payload: {
            list: data,
            total: Number(headers['x-total-count']),
            page: Number(page)
        }
    });
    return data
}

// 新建
function* createData(payload) {
    try {
        const { data: { id } } = yield call(userServices.create, payload.data);
        const list = yield select(state => state.users.list);
        const item = { ...list[0], ...payload.data, id };
        yield put({
            type: 'REQUEST_USERS_CREATE',
            payload: item
        });
    }catch (e) {
        console.log(e);
    }
}

// 更新
function* updateData(payload){
    const { id, values } = payload.data;
    const res = yield call(userServices.patch, id, values);
    const item = yield select(state => {
        const row = state.users.list.find(x => x.id === id);
        return { ...row, ...values };
    });

    yield put({
        type: 'REQUEST_USERS_UPDATE',
        payload: item
    });
}

// 删除
function* deleteDate(payload){
    const { id } = payload;
    // const res = yield call(userServices.remove, id);
    const list = yield select(state => state.users.list.filter(x => x.id !== id));

    yield put({
        type: 'REQUEST_USERS_DELETE',
        payload: list
    });
}

// loading
function* loadingDate(payload) {
    yield put({ type: 'REQUEST_USERS_LOADING', payload })
}

export const USERS_HANDLERS = {
    HANDLER_REQUEST_USERS_FETCH: fetchData,
    HANDLER_REQUEST_USERS_CREATE: createData,
    HANDLER_REQUEST_USERS_UPDATE: updateData,
    HANDLER_REQUEST_USERS_DELETE: deleteDate,
    HANDLER_REQUEST_USERS_LOADING: loadingDate,
};

