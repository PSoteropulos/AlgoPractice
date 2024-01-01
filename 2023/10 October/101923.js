const alternateDigitSum = (n) => {
    let neg = false 
    let total = 0
    for (let i = 0; i<n.toString().length; i++){
        neg ? total -= Number(n.toString().split("")[i]) : total += Number(n.toString().split("")[i])
        neg = !neg
    }
    return total
};





console.log(alternateDigitSum(521))
console.log(alternateDigitSum(111))
console.log(alternateDigitSum(886996))
console.log(alternateDigitSum(25))





// 2544. Alternating Digit Sum
// Easy
// Topics
// Companies
// Hint
// You are given a positive integer n. Each digit of n has a sign according to the following rules:

// The most significant digit is assigned a positive sign.
// Each other digit has an opposite sign to its adjacent digits.
// Return the sum of all digits with their corresponding sign.

 

// Example 1:

// Input: n = 521
// Output: 4
// Explanation: (+5) + (-2) + (+1) = 4.
// Example 2:

// Input: n = 111
// Output: 1
// Explanation: (+1) + (-1) + (+1) = 1.
// Example 3:

// Input: n = 886996
// Output: 0
// Explanation: (+8) + (-8) + (+6) + (-9) + (+9) + (-6) = 0.
 

// Constraints:

// 1 <= n <= 109
 

// Accepted
// 46K
// Submissions
// 67.5K
// Acceptance Rate
// 68.2%