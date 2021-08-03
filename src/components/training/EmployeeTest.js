

// import Employee from './Employee';
import Calc from './Calc';

// jasmine, jest 

// 1. invoke describe();
// 2. invoke it();

describe(`Test Employee Component`, () => {

    it(`test Calc equals 10`, () => {
        let num = Calc();
        expect(num).toBe(10);
    });

    it(`test Calc not equals 5`, () => {
        let num = Calc();
        expect(num).notToBe(10);
    });

    // it(`Test first Employee Component`, () => { });

    // it(`Test second Employee Component`, () => { });

});
