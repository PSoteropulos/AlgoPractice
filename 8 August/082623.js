const findMaxConsecutiveOnes = (nums) => {
    let totalMax = 0
    let currentMax = 0
    for (let i = 0; i<nums.length; i++){
        if (i===0 && nums[i]===1){
            currentMax = 1
        }
        else if (nums[i]===1 && nums[i-1]===1){
            currentMax ++
        }
        else if (nums[i]===1){
            currentMax = 1
        }
        else {
            currentMax = 0
        }
        if (currentMax > totalMax){
            totalMax = currentMax
        }
    }
    return totalMax
};





console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))






// 485. Max Consecutive Ones
// Easy
// 5K
// 442
// Companies
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// Accepted
// 945.7K
// Submissions
// 1.6M
// Acceptance Rate
// 57.5%