# Testing your app with Jest

Learn how to test your React/Redux app thoroughly, including actions, reducers and components! (https://academy.plot.ly/react/6-testing/)

## Existing project
### Install Jest using npm
```
npm install --save-dev jest
```

## Project from scratch
Thankfully, **create-react-app** comes with it installed by default so we won’t need to do any setup! Simply enter npm run test into your terminal to run the tests we’ll write below.
### Installing Create-React-App
```
npm install -g create-react-app
```
### Installing Create-React-App
```
create-react-app <project_name>
```

## Unit testing
Unit testing is the practice of testing the smallest possible units of our code. In JavaScript, those are functions. We run our tests and automatically verify that our functions do the thing we expect them to do. We assert that, given a set of inputs, our functions return the proper values and handle problems.

We’ll be using the Jest test framework by facebook. It was written to help test react apps, and is perfect for that purpose! It makes writing tests as easy as speaking - you describe a unit of your code and expect it to do the correct thing.

### Basic (Testing a function)
1. We are going to create our first file that contain a simple function into **src/add.js** file, that it described below:
```
// src/add.js
export function add(x, y) {
    return x + y;
}
```
This function just add two numbers given.

2. Now, we are going to create a second file that will contain the test suites (unit tests), into new folder **src/test/add.test.js**, like this:
```
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
```

3. Finally, just we have to run the command **npm run test -- src/tests/add.test.js** and we can see sometihing like this:
```
 PASS  src/tests/add.test.js
  add()
    ✓ adds two numbers (8ms)
    ✓ doesnt add the third number (1ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        12.726s
Ran all test suites matching /src/tests/add.test.js/.

```
## Redux
### Basic (Testing Actions)
1. We are going to create a new file called **src/actions/changeLocation.js**, this file should have a pure function, like this:
```
src/actions/changeLocation.js
export function changeLocation(newLocation) {
    return {
        type: CHANGE_LOCATION,
        location: newLocation
    }
}
```
2. In order to write good code, we separate the actionTypes constants in a module called *actionTypes*. These are exported to use them outside.
```
export const CHANGE_LOCATION = 'CHANGE_LOCATION'
export const SET_SELECTED_DATE = 'SET_SELECTED_DATE'
export const SET_SELECTED_TEMP = 'SET_SELECTED_TEMP'

```
3. Now, we have to create a test action file, **src/actions/changeLocation.js**, and we are going to verify it type and if recive a external variable and pass into it. Thats mean make a one suite with two unit tests.
```
describe('changeLocation', () => {
        it('should have a type of "CHANGE_LOCATION"', () => {
            expect(changeLocation().type).toEqual('CHANGE_LOCATION');
        });

        it('should pass on the location we pass in', () => {
            var location = 'Vienna, Austria';
            expect(changeLocation(location).location).toEqual(location);
        });
    });
```

4. Finally, just we have to run the command **npm run test -- src/tests/action.test.js** again, and we can see sometihing like this:
```
 PASS  src/tests/actions.test.js (27.311s)
  actions
    changeLocation
      ✓ should have a type of "CHANGE_LOCATION" (8ms)
      ✓ should pass on the location we pass in (2ms)
    setSelectedDate
      ✓ should have a type of SET_SELECTED_DATE (2ms)
      ✓ should pass on the date we pass in (1ms)
    setSelectedTemp
      ✓ should have a type of SET_SELECTED_TEMP (2ms)
      ✓ should pass on the temp we pass in (1ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        53.144s
Ran all test suites matching /src/tests/actions.test.js/.

Active Filters: filename /src/tests/actions.test.js/
 › Press c to clear filters.

Watch Usage
 › Press a to run all tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

### Basic (Testing Reducers)
1. We are going to use a usefull tool to manage our data structures. It is called immutable

__immutable:__ Immutable.js provides many Persistent Immutable data structures including: List, Stack, Map, OrderedMap, Set, OrderedSet and Record.

These data structures are highly efficient on modern JavaScript VMs by using structural sharing via hash maps tries and vector tries as popularized by Clojure and Scala, minimizing the need to copy or cache data.

Immutable also provides a lazy Seq, allowing efficient chaining of collection methods like map and filter without creating intermediate representations. Create some Seq with Range and Repeat.

Install **immutable** using npm
 ```
 npm install immutable --save
 ```

 2. Once we have immutable installed, we are going to create our first reducer. For that, we have to create a reducers file that contain a pure function, that it will be exported. In order to mantein a good project structure, we should to create a new folder **src/reducers/mainReducer.js**
 ```
 export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return state.set('location', action.location);
    case 'SET_DATA':
      return state.set('data', fromJS(action.data));
    case 'SET_DATES':
      return state.set('dates', fromJS(action.dates));
    case 'SET_TEMPS':
      return state.set('temps', fromJS(action.temps));
    case 'SET_SELECTED_DATE':
      return state.setIn(['selected', 'date'], action.date);
    case 'SET_SELECTED_TEMP':
      return state.setIn(['selected', 'temp'], action.temp);
    default:
      return state;
  }
}
 ```
