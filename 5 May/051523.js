const minimumOperations = (nums) => {
    let count = 0
    let running = true
    while (running){
        let smallestNum = 100
        let overZero = false
        for (let i = 0; i <nums.length; i++){
            if ((nums[i] <= smallestNum) && (nums[i] > 0)){
                smallestNum = nums[i]
            }
            if (nums[i] > 0){
                overZero = true
            }
        }
        if (overZero === true){
            for (let j = 0; j<nums.length; j++){
                nums[j] = nums[j] - smallestNum
            }
            count ++
        } else {
            break
        }
    }
    return count
};



console.log(minimumOperations([1,5,0,3,5]))
console.log(minimumOperations([0]))




// 2357. Make Array Zero by Subtracting Equal Amounts
// Easy
// 865
// 33
// Companies
// You are given a non-negative integer array nums. In one operation, you must:

// Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
// Subtract x from every positive element in nums.
// Return the minimum number of operations to make every element in nums equal to 0.

 

// Example 1:

// Input: nums = [1,5,0,3,5]
// Output: 3
// Explanation:
// In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
// In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
// In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].
// Example 2:

// Input: nums = [0]
// Output: 0
// Explanation: Each element in nums is already 0 so no operations are needed.
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100
// Accepted
// 67.7K
// Submissions
// 93.4K
// Acceptance Rate
// 72.4%