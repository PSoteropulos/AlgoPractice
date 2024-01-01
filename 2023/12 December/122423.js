// below is gpt assisted binary search implementation; binary search halves the range each time you iterate O(log n) as opposed to iterating over each item in order O(n)
const searchRange = (nums, target) => {
    // Helper function to find the leftmost (or rightmost) index
    const binarySearch = (left, right, findFirst) => {
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (nums[mid] > target || (findFirst && nums[mid] === target)) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return left
    }
    
    const start = binarySearch(0, nums.length - 1, true)
    if (start === nums.length || nums[start] !== target) {
        return [-1, -1]
    }
    const end = binarySearch(0, nums.length - 1, false) - 1
    return [start, end]
}

// primary attempt
// const searchRange = (nums, target) => {
//     if (nums.length === 1 && nums[0]===target){
//         return [0,0]
//     }
//     let first = undefined
//     let last = undefined
//     for (let i = 0; i<nums.length; i++){
//         if (nums[i]===target && !first){
//             first = i
//         }
//         if (nums[nums.length-1-i]===target && !last){
//             last = nums.length-1-i
//         }
//         if (first>=0 && last>=0){
//             return [first,last]
//         }
//     }
//     return [-1, -1]
// };





// console.log(searchRange(nums = [2,2], target = 2))
// console.log(searchRange(nums = [5,7,7,8,8,10], target = 8))
// console.log(searchRange(nums = [5,7,7,8,8,10], target = 6))
// console.log(searchRange(nums = [], target = 0))
console.log(searchRange(nums = [1,1,2], target = 1))








// 34. Find First and Last Position of Element in Sorted Array
// Medium
// Topics
// Companies
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109