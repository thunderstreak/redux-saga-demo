/*
* 初始化定义 state 需要与 rootReducer 里面定义的的状态键名称相同
* */
let initialState = {
    counter: {
        value: 0,
    },
    users: {
        list: [],
        total: 0,
        page: 0,
        test: 0,
        loading:false,
    }
};

export default initialState
