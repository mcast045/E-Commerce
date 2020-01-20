import { LOGIN_SUCCESS, LOGIN_FAIL } from '../Constants'

export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    payload: user
})

export const loginFail = () => ({
    type: LOGIN_FAIL
})