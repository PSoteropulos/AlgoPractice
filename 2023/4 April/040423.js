const minimumSum = (num) => {
    let sortedNumStringArray = num.toString().split("").sort()
    let num1 = sortedNumStringArray[0] + sortedNumStringArray[2]
    let num2 = sortedNumStringArray[1] + sortedNumStringArray[3]
    return Number(num1)+Number(num2)
};




console.log(minimumSum(2932))
console.log(minimumSum(4009))



// 2160. Minimum Sum of Four Digit Number After Splitting Digits
// Easy
// 1K
// 109
// Companies
// You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

// For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
// Return the minimum possible sum of new1 and new2.

 

// Example 1:

// Input: num = 2932
// Output: 52
// Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
// The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.
// Example 2:

// Input: num = 4009
// Output: 13
// Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc. 
// The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.
 

// Constraints:

// 1000 <= num <= 9999
// Accepted
// 81.6K
// Submissions
// 94.1K
// Acceptance Rate
// 86.8%