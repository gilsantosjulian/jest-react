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
3. Now, we have to create a test action file, **src/tests/action.test.js**, and we are going to verify it type and if recive a external variable and pass into it. Thats mean make a one suite with two unit tests.
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

 3. Now, we have to create a test reducer file, **src/tests/reducer.test.js**, and we are going to verify if return a initial state, if react to an action with the type CHANGE_LOCATION and another little more things.
  ```
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
  });
  ```

  4. Finally, just we have to run the command **npm run test -- --verbose** and we can see all unit tests, it describe each one, sometihing like this:
  ```
   PASS  src/tests/add.test.js (6.202s)
  add()
    ✓ adds two numbers (7ms)
    ✓ doesnt add the third number (1ms)

 PASS  src/tests/actions.test.js
  actions
    changeLocation
      ✓ should have a type of "CHANGE_LOCATION" (3ms)
      ✓ should pass on the location we pass in (2ms)
    setSelectedDate
      ✓ should have a type of SET_SELECTED_DATE (2ms)
      ✓ should pass on the date we pass in (1ms)
    setSelectedTemp
      ✓ should have a type of SET_SELECTED_TEMP (2ms)
      ✓ should pass on the temp we pass in (1ms)

 PASS  src/tests/reducer.test.js
  mainReducer
    ✓ should return a initial state (7ms)
    ✓ should react to an action with the type CHANGE_LOCATION (2ms)
    ✓ should react to an action with the type SET_DATES (3ms)

Test Suites: 3 passed, 3 total
Tests:       11 passed, 11 total
Snapshots:   0 total
Time:        20.144s
Ran all test suites related to changed files.

Watch Usage
 › Press a to run all tests.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.

  ```
### Basic (Testing Components)

#### Setup
To render the components without opening a browser we’ll have to install the **react-test-renderer**. It allows us to render the component to a JSON object!.
```
npm install --save-dev react-test-renderer
```

1. Let's create a new file called **App.test.js** and add the new code to test. We will to use the App component, so we going to import it:

```
import React from 'react';
import App from '../App';

describe('components', () => {
  describe('<App>', () => {
    
  })
})
```

2. Now we have to render the component without make use of browser, for that we have ti use **react-test-render** library in order to render the component. It allow us to render the component to a JSON object.
```
npm install --save react-test-render
```
And import it, in the test file. 

3. After that we create a basic suit of component test, where we have to verify is it renders without throwing error and taking a snapshot we know when the output changes.
```
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
```

4. Run the command test:
```
npm run test -- src/tests/App.test.js
// or
npm run test -- verbose
// or simply
npm run test
```

5. Now try changing the text in the App component and run npm run test again. We should see a new error.
```
// App.js
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
```
```
npm run test -- src/tests/App.test.js

Snapshot Summary
 › 1 snapshot test failed in 1 test suite. Inspect your code changes or press `u` to update them.


● components › <App> › render correctly

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot 1.

    - Snapshot
    + Received

    @@ -20,8 +20,8 @@
       >
         To get started, edit
         <code>
           src/App.js
         </code>
    -     and save to reload.
    +     and save to reload Julian.
       </p>
     </div>

```
Awesome, Jest caught the changes in the output of our App component and immediately notified us of a potential error! If we wanted to make this the correct text, all we would have to do is run **npm run test -- -u** (-u stands for “update snapshots”) and Jest would recognize this output as the correct one!