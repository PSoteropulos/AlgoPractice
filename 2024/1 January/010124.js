const sortArrayByParity = (nums) => {
    for (let i = nums.length-1; i>=0; i--){
        if (nums[i]%2!==0){
            nums.push(nums[i])
            nums.splice(i,1)
        }
    }
    return nums
};





console.log(sortArrayByParity([3,1,2,4]))
console.log(sortArrayByParity([0]))








// 905. Sort Array By Parity
// Attempted
// Easy
// Topics
// Companies
// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

 

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 5000
// 0 <= nums[i] <= 5000