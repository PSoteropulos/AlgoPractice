const pangrams = (s) => {
    const deleteIndex = (value) =>{
        alphabetArray.splice(value, 1)
    }
    let alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for (let i=0;i<s.length;i++){
        let foundIndex = alphabetArray.indexOf(s[i].toLowerCase())
        if (foundIndex != -1){
            deleteIndex(foundIndex)
        }
    }
    if (alphabetArray.length == 0){
        return "pangram"
    }
    else if (alphabetArray.length > 0){
        return "not pangram"
    }
}


console.log(pangrams("The quick brown fox jumps over the lazy dog"))
console.log(pangrams("We promptly judged antique ivory buckles for the next prize"))




// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

// Example

// The string contains all letters in the English alphabet, so return pangram.

// Function Description

// Complete the function pangrams in the editor below. It should return the string pangram if the input string is a pangram. Otherwise, it should return not pangram.

// pangrams has the following parameter(s):

// string s: a string to test
// Returns

// string: either pangram or not pangram
// Input Format

// A single line with string .