const isMonotonic = (nums) => {
    let monoIncrease = true
    let monoDecrease = true
    for (let i=1; i<nums.length; i++){
        if (nums[i] < nums[i-1]){
            monoIncrease = false
        }
        if (nums[i] > nums[i-1]){
            monoDecrease = false
        }
    }
    if (monoIncrease || monoDecrease){
        return true
    }
    else {
        return false
    }
};





console.log(isMonotonic([1,2,2,3]))
console.log(isMonotonic([6,5,4,4]))
console.log(isMonotonic([1,3,2]))






// 896. Monotonic Array
// Easy
// 2.2K
// 64
// Companies
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

 

// Example 1:

// Input: nums = [1,2,2,3]
// Output: true
// Example 2:

// Input: nums = [6,5,4,4]
// Output: true
// Example 3:

// Input: nums = [1,3,2]
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -105 <= nums[i] <= 105
// Accepted
// 274.3K
// Submissions
// 468.6K
// Acceptance Rate
// 58.5%