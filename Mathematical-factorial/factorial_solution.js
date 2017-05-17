module.exports = function factorial (p) {
    if (p === 0) return 1
    return p * factorial(p - 1)
};