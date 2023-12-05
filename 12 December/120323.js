const countLargestGroup = (n) => {
    const sumGroups = {}
    const sumOfDigits = (num) => {
        let sum = 0
        while (num > 0) {
            sum += num % 10
            num = Math.floor(num / 10)
        }
        return sum
    }
    for (let i = 1; i <= n; i++) {
        const sum = sumOfDigits(i)
        if (!sumGroups[sum]) {
            sumGroups[sum] = []
        }
        sumGroups[sum].push(i)
    }
    let maxGroupSize = 0
    for (const group in sumGroups) {
        maxGroupSize = Math.max(maxGroupSize, sumGroups[group].length)
    }
    let largestGroupsCount = 0
    for (const group in sumGroups) {
        if (sumGroups[group].length === maxGroupSize) {
            largestGroupsCount++
        }
    }
    return largestGroupsCount
}







console.log(countLargestGroup(13))
console.log(countLargestGroup(2))
console.log(countLargestGroup(46))







// 1399. Count Largest Group
// Easy
// Topics
// Companies
// Hint
// You are given an integer n.

// Each number from 1 to n is grouped according to the sum of its digits.

// Return the number of groups that have the largest size.

 

// Example 1:

// Input: n = 13
// Output: 4
// Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
// [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
// There are 4 groups with largest size.
// Example 2:

// Input: n = 2
// Output: 2
// Explanation: There are 2 groups [1], [2] of size 1.
 

// Constraints:

// 1 <= n <= 104