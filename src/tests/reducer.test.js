import mainReducer from '../reducers/mainReducer'
import { fromJs } from 'immutable'

const initialState = {
    location: '',
    data: {},
    dates: [],
    temps: [],
    selected: {
        date: '',
        temp: null
    }
}

describe('mainReducer', () => {

    it('should return a initial state', () => {
        expect(mainReducer(undefined, {})).toEqual(initialState)
    })

    it('should react to an action with the type CHANGE_LOCATION', () => {

    })

})