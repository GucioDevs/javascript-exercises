const add = function(a,b) {
 return a + b; 
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((prevVal, curVal) => prevVal + curVal, 0); 
};

const multiply = function(arr) {
  return arr.reduce((prevVal, curVal) => prevVal * curVal, 1); 
};

const power = function(a, p) {
  return a**p; 
};

const factorial = function(a) {
  let result = 1;
  for(let i = a; i > 0; i--){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
