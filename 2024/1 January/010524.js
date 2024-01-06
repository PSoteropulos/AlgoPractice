//original solution
const thirdMax = (nums) => {
    let numSet = new Set()
    for (let i = 0; i < nums.length; i++){
        numSet.add(nums[i])
    }
    let sortedArray = Array.from(numSet).sort((a,b)=>a-b)
    console.log(sortedArray)
    return sortedArray[sortedArray.length-3] !== undefined? sortedArray[sortedArray.length-3] : sortedArray[sortedArray.length-1]
};

//optimized
// const thirdMax = (nums) => {
//     let firstMax = -Infinity, secondMax = -Infinity, thirdMax = -Infinity;
//     for (let num of nums) {
//         if (num > firstMax) {
//             thirdMax = secondMax
//             secondMax = firstMax
//             firstMax = num
//         } else if (num > secondMax && num < firstMax) {
//             thirdMax = secondMax
//             secondMax = num
//         } else if (num > thirdMax && num < secondMax) {
//             thirdMax = num
//         }
//     }
//     return thirdMax !== -Infinity ? thirdMax : firstMax
// }






console.log(thirdMax([3,2,1]))
console.log(thirdMax([1,2]))
console.log(thirdMax([2,2,3,1]))
console.log(thirdMax([3,3,4,3,4,3,0,3,3]))








// 414. Third Maximum Number
// Easy
// Topics
// Companies
// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1