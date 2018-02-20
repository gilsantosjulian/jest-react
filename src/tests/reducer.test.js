import mainReducer from '../reducers/mainReducer'
import { fromJS } from 'immutable'

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
        expect(mainReducer(undefined, {})).toEqual(fromJS(initialState))
    });

    it('should react to an action with the type CHANGE_LOCATION', () => {
        let location = 'Bogotá'
        expect(mainReducer(undefined, {
            type: 'CHANGE_LOCATION',
            location: location
        }))
        .toEqual(fromJS({
            location: location,
            data: {},
            dates: [],
            temps: [],
            selected: {
                date: '',
                temp: null
            }
        }))
    });

    it('should react to an action with the type SET_DATES', function () {
        var dates = ['2018-01-01', '2018-02-02'];
        expect(mainReducer(undefined, {
            type: 'SET_DATES',
            dates: dates
        })).toEqual(fromJS({
            location: '',
            data: {},
            dates: dates,
            temps: [],
            selected: {
                date: '',
                temp: null
            }
        }));
    });

})