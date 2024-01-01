const findErrorNums = (nums) =>{
    let dup = undefined
    let seen = new Set()
    for (let i = 0; i < nums.length; i++){
        if (seen.has(nums[i])){
            dup = nums[i]
        }
        else {
            seen.add(nums[i])
        }
    }
    for (let i = 1; i <= nums.length; i++){
        if (!seen.has(i)){
            return [dup, i]
        }
    }
};







// console.log(findErrorNums([1,2,2,4]))
// console.log(findErrorNums([1,1]))
// console.log(findErrorNums([3,2,3,4,6,5]))
console.log(findErrorNums([1,5,3,2,2,7,6,4,8,9]))








// 645. Set Mismatch
// Easy
// Topics
// Companies
// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]
 

// Constraints:

// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104