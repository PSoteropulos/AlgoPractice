const minMaxDifference = (num) => {
    let numToMaxArray = num.toString().split("")
    let numToMinArray = num.toString().split("")
    let maxNumToReplace = ""
    let minNumToReplace = ""
    for (let i=0; i<numToMaxArray.length; i++){
        if (numToMaxArray[i] !== "9"){
            maxNumToReplace = numToMaxArray[i]
            console.log(maxNumToReplace)
            break
        }
    }
    for (let j=0; j<numToMinArray.length; j++){
        if (numToMaxArray[j] !== "0"){
            minNumToReplace = numToMinArray[j]
            break
        }
    }
    for (let i=0; i<numToMaxArray.length; i++){
        if (numToMaxArray[i] === maxNumToReplace){
            numToMaxArray[i] = "9"
        }
    }
    for (let j=0; j<numToMinArray.length; j++){
        if (numToMinArray[j] === minNumToReplace){
            numToMinArray[j] = "0"
        }
    }
    console.log(maxNumToReplace)
    return (Number(numToMaxArray.join("")) - Number(numToMinArray.join("")))
};







console.log(minMaxDifference(11891))
console.log(minMaxDifference(90))






// LeetCode Logo
// Problem List
// Premium
// 0

// avatar
// 2566. Maximum Difference by Remapping a Digit
// Easy
// 195
// 33
// Companies
// You are given an integer num. You know that Danny Mittal will sneakily remap one of the 10 possible digits (0 to 9) to another digit.

// Return the difference between the maximum and minimum values Danny can make by remapping exactly one digit in num.

// Notes:

// When Danny remaps a digit d1 to another digit d2, Danny replaces all occurrences of d1 in num with d2.
// Danny can remap a digit to itself, in which case num does not change.
// Danny can remap different digits for obtaining minimum and maximum values respectively.
// The resulting number after remapping can contain leading zeroes.
// We mentioned "Danny Mittal" to congratulate him on being in the top 10 in Weekly Contest 326.
 

// Example 1:

// Input: num = 11891
// Output: 99009
// Explanation: 
// To achieve the maximum value, Danny can remap the digit 1 to the digit 9 to yield 99899.
// To achieve the minimum value, Danny can remap the digit 1 to the digit 0, yielding 890.
// The difference between these two numbers is 99009.
// Example 2:

// Input: num = 90
// Output: 99
// Explanation:
// The maximum value that can be returned by the function is 99 (if 0 is replaced by 9) and the minimum value that can be returned by the function is 0 (if 9 is replaced by 0).
// Thus, we return 99.
 

// Constraints:

// 1 <= num <= 108
// Accepted
// 20K
// Submissions
// 33.6K
// Acceptance Rate
// 59.6%