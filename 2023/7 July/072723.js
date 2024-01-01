const findDisappearedNumbers = (nums) => {
    let missingArray = []
    for (let i = 1; i <= nums.length; i++){
        if (!nums.includes(i)){
            missingArray.push(i)
        }
    }
    return missingArray
};






console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
console.log(findDisappearedNumbers([1,1]))






// 448. Find All Numbers Disappeared in an Array
// Easy
// 8.7K
// 441
// Companies
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
 

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Accepted
// 755.6K
// Submissions
// 1.3M
// Acceptance Rate
// 60.2%