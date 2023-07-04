const majorityElement = (nums) => {
    let highCount = 1
    let highValue = nums[0]
    let localCount = 1
    nums.sort((a,b)=>a-b)
    for (let i=0;i<nums.length-1; i++){
        if (nums[i] === nums[i+1]){
            localCount ++
            if (localCount>highCount){
                highCount = localCount
                highValue = nums[i]
            }
        }
        else {
            localCount = 1
        }
    }
    return highValue
};




console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))







// 169. Majority Element
// Easy
// 15.5K
// 455
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?
// Accepted
// 1.8M
// Submissions
// 2.9M
// Acceptance Rate
// 63.9%