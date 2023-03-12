const toLowerCase = (s) => {
    let lowerCaseWord = ""
    for (let i=0; i<s.length; i++){
        lowerCaseWord +=  s[i].toLowerCase()
    }
    return lowerCaseWord
};



console.log(toLowerCase("Hello"))
console.log(toLowerCase("here"))
console.log(toLowerCase("LOVELY"))




// 709. To Lower Case
// Easy
// 1.5K
// 2.6K
// Companies
// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"
 

// Constraints:

// 1 <= s.length <= 100
// s consists of printable ASCII characters.
// Accepted
// 408.7K
// Submissions
// 496.6K
// Acceptance Rate
// 82.3%