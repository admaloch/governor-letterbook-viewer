function removeLeadingZeros(numStr) {
    // traverse the entire string
    for (var i = 0; i < numStr.length; i++) {
        // check for the first non-zero character
        if (numStr.charAt(i) != '0') {
            // return the remaining string
            let res = numStr.substr(i);
            return res;
        }
    }

    // If the entire string is traversed
    // that means it didn't have a single
    // non-zero character, hence return "0"
    return "0";
}