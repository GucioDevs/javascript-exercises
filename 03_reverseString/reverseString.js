const reverseString = function(input) {
    arr = input.split("");
    result = "";
    for(let i = 0; i < arr.length;i++){
        result = result + arr[arr.length - 1 - i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
