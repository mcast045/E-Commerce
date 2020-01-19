import { Row1, Row2 } from '../../data/data'
import { GET_ITEM } from '../Constants/'

export const getItem = id => ({
    type: GET_ITEM,
    payload: Row1.find(item => item.id === id) || Row2.find(item => item.id === id)
})