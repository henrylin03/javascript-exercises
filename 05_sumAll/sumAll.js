const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0 ||
        !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
    };

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
