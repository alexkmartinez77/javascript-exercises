// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
// SOLUTION 1
// function anagrams(stringA, stringB) {
//      return stringA.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('') === stringB.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
// }
// SOLUTION 2
function anagrams(stringA, stringB) {
    const obj1 = makeObject(stringA);
    const obj2 = makeObject(stringB);

    if (Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    } else {
        for (let character in obj1) {
            if (obj1[character] !== obj2[character]) {
                return false;
            } else {
                return true;
            }
        }
    }

    function makeObject(string) {
        const obj = {};
        for (let character of string.replace(/[^\w]/g, '').toLowerCase()) {
            obj[character] ? obj[character]++ : obj[character] = 1;
        }
        return obj;
    }

}
module.exports = anagrams;
