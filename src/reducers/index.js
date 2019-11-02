export function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {value : state.value + 1};
        case 'DECREMENT':
            return {value : state.value - 1};
        default:
            return {value : state.value};
    }
}
export function users(state = null, action) {
    let list;
    switch (action.type) {
        case 'REQUEST_USERS_FETCH':
            return { ...state, ...action.payload };
        case 'REQUEST_USERS_DELETE':
            return { ...state, list: action.payload };
        case 'REQUEST_USERS_UPDATE':
            list = state.list.map(x => x.id === action.payload.id ? {...x, ...action.payload} : x );
            return { ...state, list };
        case 'REQUEST_USERS_CREATE':
            list = [ action.payload, ...state.list ];
            return { ...state, list };
        case 'REQUEST_USERS_LOADING':
            return { ...state, ...action.payload };
        default:
            return state
    }
}