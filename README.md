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