const maxSum = (nums) => {
    nums.sort((a,b)=>b-a)
    let answers = []
    for (let i = 0; i<nums.length-1; i++){
        for (let h=9;h>=0;h--){
            for (let j=i+1; j<nums.length; j++){
                if (nums[i].toString().includes(h) && nums[j].toString().includes(h)){
                    console.log(nums[i], nums[j])
                    return(nums[i]+nums[j])
                }
            }
        }
    }
    return -1
};





console.log(maxSum([51,71,17,24,42]))
console.log(maxSum([1,2,3,4]))
console.log(maxSum([31,25,72,79,74]))





// 2815. Max Pair Sum in an Array
// Easy
// 151
// 58
// Companies
// You are given a 0-indexed integer array nums. You have to find the maximum sum of a pair of numbers from nums such that the maximum digit in both numbers are equal.

// Return the maximum sum or -1 if no such pair exists.

 

// Example 1:

// Input: nums = [51,71,17,24,42]
// Output: 88
// Explanation: 
// For i = 1 and j = 2, nums[i] and nums[j] have equal maximum digits with a pair sum of 71 + 17 = 88. 
// For i = 3 and j = 4, nums[i] and nums[j] have equal maximum digits with a pair sum of 24 + 42 = 66.
// It can be shown that there are no other pairs with equal maximum digits, so the answer is 88.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: No pair exists in nums with equal maximum digits.
 

// Constraints:

// 2 <= nums.length <= 100
// 1 <= nums[i] <= 104
// Accepted
// 26K
// Submissions
// 44.8K
// Acceptance Rate
// 58.0%