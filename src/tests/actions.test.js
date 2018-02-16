// actions.test.js
import {
    changeLocation, setSelectedDate, setSelectedTemp
} from '../actions/changeLocation';

describe('actions', () => {
    describe('changeLocation', () => {
        it('should have a type of "CHANGE_LOCATION"', () => {
            expect(changeLocation().type).toEqual('CHANGE_LOCATION');
        });

        it('should pass on the location we pass in', () => {
            var location = 'Vienna, Austria';
            expect(changeLocation(location).location).toEqual(location);
        });
    });

    describe('setSelectedDate', () => {
        it('should have a type of SET_SELECTED_DATE', () => {
            expect(setSelectedDate().type).toEqual('SET_SELECTED_DATE');
         });

        it('should pass on the date we pass in', () => {
            let date = '2018-02-16'
            expect(setSelectedDate(date).date).toEqual(date);
         });
    });

    describe('setSelectedTemp', () => {
        it('should have a type of SET_SELECTED_TEMP', () => {
            expect(setSelectedTemp().type).toEqual('SET_SELECTED_TEMP')
         });

        it('should pass on the temp we pass in', () => { 
            let temp = '70'
            expect(setSelectedTemp(temp).temp).toEqual(temp);
        });
    });
});