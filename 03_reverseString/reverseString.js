const reverseString = function(string) {

    let newString = "";
    for (i = string.length-1; i >= 0; i--) {
        let char = string.charAt(i);
        newString = newString.concat(char);
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
