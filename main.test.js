/* Step 2: Write your tests
Have a look at some of the katas you've done previously. You'll notice that under where you write your code, there's another box with a series of tests. Now that we've covered testing with jest, those tests should start to look familiar.

Start planning the tests you'll need to write to check your CodeWarriors' solutions. Think about the different types of data that can be handed into the function and potentially any tricky edge cases that might trip them up. Your goal is to write enough tests to cover the range of different possibilities for the function that will prove that it's fully solved the problem.

👉 Install jest as a dev dependency, and update the scripts section in package.json accordingly. [The script "test" was initially setup to error assuming you hadn't installed Jest].

👉 Enable ESM for the project and Jest (if needed, see: https://jestjs.io/docs/ecmascript-modules). [i.e. put "type": "module" somewhere in the package.json statement]. I also had to set the "test" script, not to just "jest", but to "node --experimental-vm-modules node_modules/jest/bin/jest.js" (see aforementioned url).

👉 Write enough tests in main.test.js so that you can be reasonably assured that when your CodeWarrior tests their solution to your kata, if the tests pass, it works.

You can write out the solution code and run your tests yourself to make sure your tests are working properly (and it's always good to experiment with making errors in your code on purpose to make sure your tests fail correctly too!). */

//👉 Write your tests below here:

// First, import the necessary methods from Jest.
import {test, expect} from '@jest/globals';

// Next, import what is needed from the module which is being tested (making sure it is being exported).
import { ROYGBIV } from './main.js';

// test("Test test", () => {
//     let testTestInput1 = `Hello!`;
//     expect(testTestInput1).toBe(testTestInput1);
// });

test("Wrong order.", () => {
    let testInput1 = ["orange", "red", "yellow", "green", "blue", "indigo", "voilet"]; // Different order.
    expect(ROYGBIV(testInput1)).toEqual(["red", "orange", "yellow", "green", "blue", "indigo", "voilet"]);
});

test("Wrong order AND odd casing.", () => {
    let testInput2 = ["Orange", "rEd", "yelLow", "greeN", "blUe", "inDigo", "voilEt"] // Different cases.
    expect(ROYGBIV(testInput2)).toEqual(["rEd", "Orange", "yelLow", "greeN", "blUe", "inDigo", "voilEt"]);
});

test("Wrong order AND odd casing AND superfluous colour.", () => {
    let testInput3 = ["Orange", "rEd", "yelLow", "greeN", "purPle", "blUe", "inDigo", "voilEt"] // Superfluous colour.
    expect(ROYGBIV(testInput3)).toEqual(["rEd", "Orange", "yelLow", "greeN", "blUe", "inDigo", "voilEt"]);
});

test("Wrong order AND odd casing AND missing colour.", () => {
    let testInput4 = ["rEd", "yelLow", "greeN", "blUe", "inDigo", "voilEt"] // Missing colour.
    expect(ROYGBIV(testInput4)).toEqual(["rEd", "yelLow", "greeN", "blUe", "inDigo", "voilEt"]);
});

test("Wrong order AND odd casing AND missing colour AND superfluous colour.", () => {
    let testInput5 = ["rEd", "yelLow", "greeN", "blUe", "purPle", "inDigo", "voilEt"] // Missing colour AND superfluous colour.
    expect(ROYGBIV(testInput5)).toEqual(["rEd", "yelLow", "greeN", "blUe", "inDigo", "voilEt"]);
});