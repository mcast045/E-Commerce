import { LOGIN_SUCCESS, LOGIN_FAIL } from '../Constants'

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: true
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                loading: false
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state;
    }
}

export default authReducer