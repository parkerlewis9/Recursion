const expect = require("chai").expect;
const reduce = require("../reduce");

describe("#reduce", () => {
    it("should reduce an array of integers into their sum", () => { 
        const findSum = (accum, cur) => accum + cur;
        let nine = reduce([9], findSum);
        let fifteen = reduce([8,7], findSum);
        let twentyOne = reduce([6,5,4,3,2,1], findSum);

        expect(nine).to.equal(9);
        expect(fifteen).to.equal(15);
        expect(twentyOne).to.equal(21);
    });
});