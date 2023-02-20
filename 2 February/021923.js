const subtractProductAndSum = (n) => {
    let digitProduct = 1
    let digitSum = 0
    let nString = n.toString()
    digitArray = [ ]
    for (let i=0; i<nString.length; i++){
        digitArray.push(nString[i])
    }
    for (let j=0;j<digitArray.length;j++){
        digitProduct = digitProduct * Number(digitArray[j])
        digitSum = digitSum + Number(digitArray[j])
    }
    return digitProduct - digitSum
};

console.log(subtractProductAndSum(234))
console.log(subtractProductAndSum(4421))



// 1281. Subtract the Product and Sum of Digits of an Integer
// Easy
// 1.9K
// 208
// Companies
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21
 

// Constraints:

// 1 <= n <= 10^5