const findLHS = (nums) => {
    let freq = new Map()
    for (let i = 0; i < nums.length; i++){
        freq.set(nums[i], (freq.get(nums[i])||0)+1)
    }
    let longest = 0
    for (let [num, count] of freq){
        if (freq.has(num+1)){
            longest = Math.max(longest, count + freq.get(num+1))
        }
    }
    return longest
};






console.log(findLHS([1,3,2,2,5,2,3,7]))
console.log(findLHS([1,2,3,4]))
console.log(findLHS([1,1,1,1]))








// 594. Longest Harmonious Subsequence
// Easy
// Topics
// Companies
// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

 

// Example 1:

// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 2
// Example 3:

// Input: nums = [1,1,1,1]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -109 <= nums[i] <= 109