const repeatString = function (string, num) {
    if (num < 0) {
        return "ERROR";
    };

    let outputString = "";
    let n = 1;
    while (n <= num) {
        outputString += string;
        n++;
    }

    return outputString
};

// Do not edit below this line
module.exports = repeatString;
