const expect = require("chai").expect;
const isaPalindrome = require("../isaPalindrome");

describe("#isaPalindrome", () => {
    it("should return true if the string is a palindrome or an empty string", () => {
        expect(isaPalindrome("")).to.be.true;
        expect(isaPalindrome("a")).to.be.true;
        expect(isaPalindrome("aa")).to.be.true;
        expect(isaPalindrome("aba")).to.be.true;
        expect(isaPalindrome("abba")).to.be.true;
        expect(isaPalindrome("abcba")).to.be.true;
        expect(isaPalindrome("racecar")).to.be.true;
    });
    it("should return false if the string is not a palindrome", () => {
        expect(isaPalindrome("ab")).to.be.false;
        expect(isaPalindrome("abc")).to.be.false;
        expect(isaPalindrome("abce")).to.be.false;
        expect(isaPalindrome("abcef")).to.be.false;
        expect(isaPalindrome("abcefg")).to.be.false;
        expect(isaPalindrome("abcefgh")).to.be.false;
        expect(isaPalindrome("Definitely not a palindrome.")).to.be.false;
    });
});