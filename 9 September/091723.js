const removeTrailingZeros = (num) => {
    let numString = num.split("")
    for (let i=numString.length-1; i>=0; i--){
        if (numString[i] === "0"){
            numString.pop()
        }
        else break
    }
    return numString.join("")
};






console.log(removeTrailingZeros("51230100"))
console.log(removeTrailingZeros("123"))







// 2710. Remove Trailing Zeros From a String
// Easy
// Topics
// Companies
// Hint
// Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

 

// Example 1:

// Input: num = "51230100"
// Output: "512301"
// Explanation: Integer "51230100" has 2 trailing zeros, we remove them and return integer "512301".
// Example 2:

// Input: num = "123"
// Output: "123"
// Explanation: Integer "123" has no trailing zeros, we return integer "123".
 

// Constraints:

// 1 <= num.length <= 1000
// num consists of only digits.
// num doesn't have any leading zeros.
// Accepted
// 41.7K
// Submissions
// 53.2K
// Acceptance Rate
// 78.3%