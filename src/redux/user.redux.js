import axios from 'axios'
import { getRedirectPath } from '../util'
const ERR_MSG = 'ERR_MSG'
const AUTH_SUCCESS = 'AUTH_SUCCESS'

let initState = {
    redirectTo: '',
    msg: '',
    user: '',
    password: '',
    type: ''
}
export function user(state = initState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            console.log(action)
            return { ...state, redirectTo: getRedirectPath(action.payload), ...action.payload }
        case ERR_MSG:
            return { ...state, msg: action.msg, isAuth: false, ...action.payload }
        default:
            return state;
    }
}

function authSuccess(data) {
    return {type: AUTH_SUCCESS, payload: data}
}
function errMsg(msg) {
    return { msg, type: ERR_MSG }
}


export function login({ user, password }) {
    if (!user || !password) {
        return errMsg('用户密码必须输入')
    }
    return dispatch => {
        axios.post('/user/login', { user, password }).
            then(res => {
                if (res.data.code == 0) {

                    dispatch(authSuccess(res.data.data))
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
                    dispatch(authSuccess({ type }))
                } else {
                    dispatch(errMsg(res.data.msg))
                }
            })
    }
}

export function update(data) {
    console.log(data)
    return dispatch => {
        axios.post('/user/update', data)
            .then(res => {
                if (res.data.code == 0) {
                    dispatch(authSuccess(res.data.data))
                } else {
                    dispatch(errMsg(res.data.msg))
                } 
            })
    }

}