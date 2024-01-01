const secondHighest = (s) => {
    let numberSet = new Set()
    for (let i=0; i<s.length; i++){
        if ((isNaN(s[i]) === false) && (numberSet.has(Number(s[i]))===false)){
            numberSet.add(Number(s[i]))
        }
    }
    let numbers = [...numberSet].sort((a,b)=>a-b)
    if ((numbers.length>1)){
        return numbers[numbers.length-2]
    }
    return -1
};








console.log(secondHighest("dfa12321afd"))
console.log(secondHighest("abc1111"))









// Code

// Testcase
// Test Result
// Test Result

// 1796. Second Largest Digit in a String
// Easy
// Topics
// Companies
// Hint
// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

 

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit. 
 

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters and/or digits.