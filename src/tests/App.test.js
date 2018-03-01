import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('components', () => {
    describe('<App>', () => {

        it('render correctly', () => {
            var tree = renderer.create(<App />).toJSON();
            expect(tree).toMatchSnapshot();
        })
    })
})