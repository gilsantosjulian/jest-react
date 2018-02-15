// import the function to tested
import { add } from '../add.js'; 

// describe the function
describe('add()', () => {
    it('adds two numbers', () => {
        expect(add(2, 3)).toEqual(5);
    });

    it('doesnt add the third number', () => {
        expect(add(2, 3, 5)).toEqual(add(2, 3));
    });

});