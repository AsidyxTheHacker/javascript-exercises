const repeatString = function(string, num) {
    let newString = "";
    for(i = 0; i < num; i++) {
        newString = newString.concat(string);
    }
        if (num < 0) {
            return 'ERROR';
        }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
