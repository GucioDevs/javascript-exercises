const fibonacci = function(n) {
    if(n < 0) return 'OOPS';
    let index = 0;
    if(typeof n === 'string'){
        index = parseInt(n);
    }else{
        index = n;
    }
    return Math.round((1/Math.sqrt(5) * (((1+Math.sqrt(5))/2)**index - ((1-Math.sqrt(5))/2)**index)));
};

// Do not edit below this line
module.exports = fibonacci;
