import { GET_ITEM } from '../Constants/'

const initialState = {
    item: {},
    loading: true
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEM:
            return {
                ...state,
                item: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default rootReducer