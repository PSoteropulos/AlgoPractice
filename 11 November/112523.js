const largestSumAfterKNegations = (nums, k) => {
    let negatives = []
    let positives = []
    for (let i = 0; i<nums.length; i++){
        if (nums[i]>0){
            positives.push(nums[i])
        }
        else if (nums[i]<0){
            negatives.push(nums[i])
        }
    }
    for (let i = 1; i <= k; i++){
        negatives.sort((a,b)=>b-a)
        positives.sort((a,b)=>b-a)
        if (negatives.length){
            positives.push(-(negatives.slice(-1)))
            negatives.pop()
        }
        else if (nums.includes(0)){
            break
        }
        else {
            negatives.push(-(positives.slice(-1)))
            positives.pop()
        }
    }
    let finalArray = [...negatives, ...positives]
    let sum = 0
    for (let i = 0; i<finalArray.length;i++){
        sum += finalArray[i]
    }
    return sum
};







// console.log(largestSumAfterKNegations(nums = [4,2,3], k = 1))
// console.log(largestSumAfterKNegations(nums = [3,-1,0,2], k = 3))
// console.log(largestSumAfterKNegations(nums = [2,-3,-1,5,-4], k = 2))
console.log(largestSumAfterKNegations(nums =[-2,9,9,8,4], k = 5))







// 1005. Maximize Sum Of Array After K Negations
// Easy
// Topics
// Companies
// Given an integer array nums and an integer k, modify the array in the following way:

// choose an index i and replace nums[i] with -nums[i].
// You should apply this process exactly k times. You may choose the same index i multiple times.

// Return the largest possible sum of the array after modifying it in this way.

 

// Example 1:

// Input: nums = [4,2,3], k = 1
// Output: 5
// Explanation: Choose index 1 and nums becomes [4,-2,3].
// Example 2:

// Input: nums = [3,-1,0,2], k = 3
// Output: 6
// Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
// Example 3:

// Input: nums = [2,-3,-1,5,-4], k = 2
// Output: 13
// Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].
 

// Constraints:

// 1 <= nums.length <= 104
// -100 <= nums[i] <= 100
// 1 <= k <= 104