const countElements = (nums) => {
    nums.sort((a,b)=>a-b)
    let count = 0
    let lowest = nums[0]
    let highest = nums[nums.length-1]
    for (let i = 0; i<nums.length; i++){
        if (nums[i] < lowest){
            lowest = nums[i]
        }
        if (nums[i] > highest){
            highest = nums[i]
        }
        if ((lowest < nums[i]) && (highest > nums[i])){
            count ++
        }
        // console.log({highest}, {lowest}, {count})
    }
    return count
};






console.log(countElements([11,7,2,15]))
console.log(countElements([-3,3,3,90]))








// 2148. Count Elements With Strictly Smaller and Greater Elements
// Easy
// 582
// 27
// Companies
// Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

 

// Example 1:

// Input: nums = [11,7,2,15]
// Output: 2
// Explanation: The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it.
// Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it.
// In total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.
// Example 2:

// Input: nums = [-3,3,3,90]
// Output: 2
// Explanation: The element 3 has the element -3 strictly smaller than it and the element 90 strictly greater than it.
// Since there are two elements with the value 3, in total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.
 

// Constraints:

// 1 <= nums.length <= 100
// -105 <= nums[i] <= 105
// Accepted
// 47K
// Submissions
// 79.2K
// Acceptance Rate
// 59.4%