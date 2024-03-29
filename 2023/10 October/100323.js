const isCovered = (ranges, left, right) => {
    let seen = new Set()
    for (let i=0;i<ranges.length;i++){
        for (let j=ranges[i][0]; j<=ranges[i][1];j++){
            seen.add(j)
        }
    }
    for (let i=left;i<=right;i++){
        if (!seen.has(i)){
            return false
        }
    }
    return true
};







console.log(isCovered(ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5))
console.log(isCovered(ranges = [[1,10],[10,20]], left = 21, right = 21))








// 1893. Check if All the Integers in a Range Are Covered
// Easy
// Topics
// Companies
// Hint
// You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.

// Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges. Return false otherwise.

// An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.

 

// Example 1:

// Input: ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5
// Output: true
// Explanation: Every integer between 2 and 5 is covered:
// - 2 is covered by the first range.
// - 3 and 4 are covered by the second range.
// - 5 is covered by the third range.
// Example 2:

// Input: ranges = [[1,10],[10,20]], left = 21, right = 21
// Output: false
// Explanation: 21 is not covered by any range.
 

// Constraints:

// 1 <= ranges.length <= 50
// 1 <= starti <= endi <= 50
// 1 <= left <= right <= 50
// Accepted
// 35.6K
// Submissions
// 71.3K
// Acceptance Rate
// 50.0%