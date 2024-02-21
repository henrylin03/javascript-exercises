const leapYears = function (year) {
    const yearIsDivisibleBy = divisor => year % divisor === 0;

    if ((yearIsDivisibleBy(4) && !yearIsDivisibleBy(100)) ||
        yearIsDivisibleBy(400)) {
        return true;
    };

    return false;
};

// Do not edit below this line
module.exports = leapYears;
