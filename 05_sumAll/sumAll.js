const sumAll = function (startNum, endNum) {
    let sum = 0;

    let n = startNum;
    while (n <= endNum) {
        sum += n;
        n++;
    };

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
