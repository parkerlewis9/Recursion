module.exports = function isaPalindrome (input) {
    if(input.length <= 1) return true;

    if (input[0] !== input[input.length-1]) return false;

    return isaPalindrome(input.slice(1, input.length-1));
};