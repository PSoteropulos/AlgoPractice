const rotateString = (s, goal) => {
    let array = [...s]
    let count = 0
    let iterations = array.length
    while (iterations) {
        let valid = true
        for (let i=0; i<array.length; i++){
            if (array[i] !== goal[i]) {
                valid = false
            }
        }
        if (valid) return true
        array.splice(0,0,array[array.length-1])
        array.pop()
        iterations --
    }
    return false
};





console.log(rotateString(s = "abcde", goal = "cdeab"))
console.log(rotateString(s = "abcde", goal = "abced"))







// 796. Rotate String
// Easy
// Topics
// Companies
// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.
 

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false
 

// Constraints:

// 1 <= s.length, goal.length <= 100
// s and goal consist of lowercase English letters.
// Accepted
// 253.5K
// Submissions
// 447.2K
// Acceptance Rate
// 56.7%
