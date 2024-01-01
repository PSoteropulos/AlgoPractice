const minimumAbsDifference = (arr) => {
    arr.sort((a,b) => a-b)
    let minDiff = Infinity
    let ansArray = []
    for (let i = 0; i<arr.length-1; i++){
        if (arr[i+1] - arr[i] < minDiff){
            minDiff = arr[i+1] - arr[i]
        }
    }
    for (let j=0; j<arr.length-1; j++){
        if (arr[j+1] - arr[j] === minDiff){
            ansArray.push([arr[j], arr[j+1]])
        }
    }
    return ansArray
};




console.log(minimumAbsDifference([4,2,1,3]))
console.log(minimumAbsDifference([1,3,6,10,15]))
console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]))






// 1200. Minimum Absolute Difference
// Easy
// 2.1K
// 67
// Companies
// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr
 

// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
// Example 2:

// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]
// Example 3:

// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]
 

// Constraints:

// 2 <= arr.length <= 105
// -106 <= arr[i] <= 106
// Accepted
// 158.8K
// Submissions
// 228.3K
// Acceptance Rate
// 69.6%