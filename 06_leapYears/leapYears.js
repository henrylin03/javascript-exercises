const leapYears = function (year) {
    const yearIsDivisibleBy = divisor => year % divisor === 0;

    return (yearIsDivisibleBy(4) &&
        !yearIsDivisibleBy(100)) ||
        yearIsDivisibleBy(400)
};

// Do not edit below this line
module.exports = leapYears;
