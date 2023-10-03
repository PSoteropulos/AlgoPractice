const isHappy = (n) => {
    let running = true
    let seenSet = new Set()
    let array = n.toString().split("")
    while (running) {
        let newNum = 0
        for (let i = 0; i < array.length; i++){
            newNum += (Number(array[i]) * Number(array[i]))
        }
        console.log(newNum)
        if (newNum === 1){
            return true
        }
        array = newNum.toString().split("")
        if (seenSet.has(newNum)){
            return false
        }
        else {
            seenSet.add(newNum)
        }
    }
};






// console.log(isHappy(19))
// console.log(isHappy(2))
// console.log(isHappy(7))
console.log(isHappy(3))




// 202. Happy Number
// Easy
// Topics
// Companies
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
 

// Constraints:

// 1 <= n <= 231 - 1
// Accepted
// 1.3M
// Submissions
// 2.3M
// Acceptance Rate
// 55.3%