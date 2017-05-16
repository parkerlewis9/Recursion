const expect = require("chai").expect;
const factorial = require("../factorial");

describe("#factorial", () => {
    it("should return the correct factorial of a number", () => {
//      p =             0,1,2,3,4,  5,  6,  7,    8,    9,     10
//      factorial(p)    | | | | |   |   |   |     |     |       |
        p_factorials = [1,1,2,6,24,120,720,5040,40320,362880,3628800];

        for(let p = 0; p <= 10; p++) {
            expect(factorial(p)).to.equal(p_factorials[p])
        }
    });
});