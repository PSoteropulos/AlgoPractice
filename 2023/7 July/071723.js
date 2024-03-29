// 12/28 ta algo refactor
const containsDuplicate = (nums) => {
    let numSet = new Set() // initialize a new empty set to track seen values
    for (let i = 0; i < nums.length; i++){ // iterate through all of nums
        if (numSet.has(nums[i])){ // if number is in the set, its a duplicate so we return true
            return true
        }
        else{ // otherwise we add it to our set of seen numbers
            numSet.add(nums[i])
        }
    }
    return false // if we get this far then we havent returned true, so there havent been any dups
};



// old
// const containsDuplicate = (nums) => {
//     let testArray = []
//     for (let i=0; i<nums.length; i++){
//         if (testArray.includes(nums[i])){
//             return true
//         }
//         else {
//             testArray.push(nums[i])
//         }
//     }
//     return false
// };






console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))






// 217. Contains Duplicate
// Easy
// 9.9K
// 1.2K
// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// Accepted
// 3M
// Submissions
// 4.8M
// Acceptance Rate
// 61.2%