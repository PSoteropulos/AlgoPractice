const findComplement = (num) => {
    let binaryString = num.toString(2)
    let binaryComplement = ""
    for (let i = 0; i<binaryString.length; i++){
        if (binaryString[i] === "1"){
            binaryComplement = binaryComplement + 0
        }
        else if (binaryString[i] === "0"){
            binaryComplement = binaryComplement + 1
        }
    }
    let parsed = parseInt(binaryComplement, 2)
    return parsed
};




console.log(findComplement(5))
console.log(findComplement(1))





// 476. Number Complement
// Easy
// 2.5K
// 116
// Companies
// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer num, return its complement.

 

// Example 1:

// Input: num = 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
// Example 2:

// Input: num = 1
// Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 

// Constraints:

// 1 <= num < 231
 

// Note: This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/

// Accepted
// 299.3K
// Submissions
// 444.2K
// Acceptance Rate
// 67.4%