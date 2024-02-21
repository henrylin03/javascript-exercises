const sumAll = function (num1, num2) {
    const start = Math.min(...arguments);
    const end = Math.max(...arguments);

    let sum = 0;
    let n = start;
    while (n <= end) {
        sum += n;
        n++;
    };

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
