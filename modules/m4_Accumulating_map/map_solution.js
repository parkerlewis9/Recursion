module.exports = function map(array, callback) {
    if(array.length === 0) return [];

    let modifiedValue = callback(array[0]);
    let previouslyModifiedValues = map(array.slice(1), callback);

    return [modifiedValue].concat(previouslyModifiedValues);
};