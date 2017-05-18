const expect = require("chai").expect;
const map = require("../map_solution");

describe("#map", () => {
    const double = p => p *2;
    const factorial = require("../../Mathematical-factorial/factorial_solution");

    it("should modify each value of an input array and place the new value in the same index position of a new array", () => {
        expect(map([0,1,2,3,4], double)).to.deep.equal([0,2,4,6,8]);
        expect(map([0,1,2,3,4], factorial)).to.deep.equal([1,1,2,6,24])
    })
});