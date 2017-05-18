module.exports = function map(array, callback) {
    if(array.length === 0) return [];

    let currentValue = array[0];
    let modifiedValue = callback(currentValue);

    return [modifiedValue].concat(map(array.slice(1), callback))
};