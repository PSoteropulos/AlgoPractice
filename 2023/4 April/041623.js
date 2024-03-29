const findGCD = (nums) => {
    let numsSorted = nums.sort(function(a, b){return a-b})
    let smolBoi = numsSorted[0]
    let smolBoiFactors = []
    for (let i=0; i<=smolBoi;i++){
        if (smolBoi % i === 0){
            smolBoiFactors.push(i)
        }
    }
    for (let j=smolBoiFactors.length-1;j>=0;j--){
        if (numsSorted[numsSorted.length-1] % smolBoiFactors[j] === 0){
            return smolBoiFactors[j]
        }
    }
};


console.log(findGCD([2,5,6,9,10]))
console.log(findGCD([7,5,6,8,3]))
console.log(findGCD([3,3]))
console.log(findGCD([6,7,9]))
console.log(findGCD([6,9,10]))


// 1979. Find Greatest Common Divisor of Array
// Easy
// 840
// 33
// Companies
// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

 

// Example 1:

// Input: nums = [2,5,6,9,10]
// Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.
// Example 2:

// Input: nums = [7,5,6,8,3]
// Output: 1
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 8.
// The greatest common divisor of 3 and 8 is 1.
// Example 3:

// Input: nums = [3,3]
// Output: 3
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 3.
// The greatest common divisor of 3 and 3 is 3.
 

// Constraints:

// 2 <= nums.length <= 1000
// 1 <= nums[i] <= 1000
// Accepted
// 81.3K
// Submissions
// 105.6K
// Acceptance Rate
// 77.0%