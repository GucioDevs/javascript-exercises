const palindromes = function (str) {
    const strLetters = alphaOnly(str).toLowerCase();
    const reversed = Array.from(strLetters).reverse().join('');
    return reversed === strLetters;    
};

function alphaOnly(str){
    return str.replace(/[^A-Za-z]/g, '');
}
// Do not edit below this line
module.exports = palindromes;
