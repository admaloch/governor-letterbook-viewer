// function that will get rid of zeros in front of a str
const removeLeadingZeros=(str)=> {
    // traverse the entire string
    for (var i = 0; i < str.length; i++) {
        // check for the first non-zero character
        if (str.charAt(i) != '0') {
            // return the remaining string
            let result = str.substr(i);
            return result;
        }
    }
    return "0";
}