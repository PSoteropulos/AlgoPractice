const largestOddNumber = (num) => {
    let currentMax = ""
    let startedOdd = false
    for (let i = num.length-1; i >= 0; i--){
        if (Number(num[i])%2!==0 && !startedOdd){
            currentMax += num[i]
            startedOdd = true
        }
        else if (startedOdd){
            currentMax += num[i]
        }
    }
    return currentMax.split("").reverse().join("")
};






console.log(largestOddNumber("52"))
console.log(largestOddNumber("4206"))
console.log(largestOddNumber("35427"))







// 1903. Largest Odd Number in String
// Easy
// 1.1K
// 72
// Companies
// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

 

// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.
 

// Constraints:

// 1 <= num.length <= 105
// num only consists of digits and does not contain any leading zeros.
// Accepted
// 78.3K
// Submissions
// 136.3K
// Acceptance Rate
// 57.5%