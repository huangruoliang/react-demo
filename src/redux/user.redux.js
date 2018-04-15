import axios from 'axios'
import { getRedirectPath } from '../util'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const ERR_MSG = 'ERR_MSG'

let initState = {
    redirectTo: '',
    isAuth: false,
    msg: '',
    user: '',
    password: '',
    type: ''
}
export function user(state = initState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            console.log(1)
            return { ...state, redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload }
        case LOGIN_SUCCESS:
            console.log(action)
            return { ...state, redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload }
        case ERR_MSG:
            return { ...state, msg: action.msg, isAuth: false, ...action.payload }

        default:
            return state;
    }
}


function errMsg(msg) {
    return { msg, type: ERR_MSG }
}

function registerSuccess(data) {
    return { type: REGISTER_SUCCESS, payload: data }
}
function loginSuccess(data) {
    return { type: LOGIN_SUCCESS, payload: data }
}
export function login({ user, password }) {
    if (!user || !password) {
        return errMsg('用户密码必须输入')
    }
    return dispatch => {
        axios.post('/user/login', { user, password }).
            then(res => {
                if (res.data.code == 0) {
                    
                    dispatch(loginSuccess(res.data.data))
                } else {
                    dispatch(errMsg(res.data.msg))
                }
            })
    }
}
export function register({ user, password, repeatpwd, type }) {
    if (!user || !password || !type) {
        return errMsg('用户名和密码必须输入')
    }
    if (password !== repeatpwd) {
        return errMsg('密码和确认密码不同')
    }
    return dispatch => {
        axios.post('/user/register', { user, password, type })
            .then(res => {
                if (res.data.code == 0) {
                    dispatch(registerSuccess(res.data.data))
                } else {
                    dispatch(errMsg(res.data.msg))
                }
            })
    }
}