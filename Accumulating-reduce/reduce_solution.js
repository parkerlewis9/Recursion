module.exports = function reduce (input, callback) {
    if (input.length === 1) return input[0];
    if (input.length === 2) return callback(input[1], input[0]);
    
    let accumulatedValue = reduce(input.slice(1), callback);

    return callback(accumulatedValue, input[0]);  
};