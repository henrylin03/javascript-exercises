const removeFromArray = function (arr, ...elementsForRemoval) {
    return arr.filter(elem => !elementsForRemoval.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
