// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
//-------------------------------------------------------
// solution#1 - Reverse() method
// function reverse(str) {
// console.log(str.split('').reverse().join(''));
// return str.split('').reverse().join('');
// }
//--------------------------------------------------------
// solution#2 - Array Method
// function reverse(str) {
//     const reverse = [];
//     const split = str.split('');
//     for (let i = split.length-1; i >=0; i--) {
//         reverse.push(split[i]);
//     }
//     return reverse.join('');
// }
//-----------------------------------------------------------
// solution#3 - For Of   Remember 4llos (pharrel los)
// function reverse(str) {
//     let reverse = '';
//     for(let letter of str){
//         reverse = letter + reverse;
//     }
//     return reverse;
// }
// solution 4 - Reduce helper
// function reverse(str) {// reduce takes 2 values, First is a function, second is a starting initial value for the function
//     return str.split('').reduce((reverse, letter) => letter + reverse, '' );      // the initial value '' gets passed into the first argument of the anonymous function as 'revers, '');                               
// }
// module.exports = reverse;
