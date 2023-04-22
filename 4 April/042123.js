const sumOfUnique = (nums) => {
    let count = 0
    let encounteredNums = []
    let deductedNums = []
    for (let i=0; i<nums.length; i++){
        if ((encounteredNums.includes(nums[i]) === true) && (deductedNums.includes(nums[i])===false)){
            count -= nums[i]
            deductedNums.push(nums[i])
        }
        else if (encounteredNums.includes(nums[i]) === false){
            count += nums[i]
            encounteredNums.push(nums[i])
        }
    }
    return count
};



console.log(sumOfUnique([1,2,3,2]))
console.log(sumOfUnique([1,1,1,1,1]))
console.log(sumOfUnique([1,2,3,4,5]))




// 1748. Sum of Unique Elements
// Easy
// 1.2K
// 28
// Companies
// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100
// Accepted
// 115.5K
// Submissions
// 151.3K
// Acceptance Rate
// 76.3%