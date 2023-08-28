const kLengthApart = (nums, k) => {
    let indexArray = []
    for (let i=0; i<nums.length; i++){
        if (nums[i] === 1){
            indexArray.push(i)
        }
    }
    for (let j=0; j<indexArray.length-1; j++){
        if ((indexArray[j+1] - indexArray[j]-1) < k){
            return false
        }
    }
    return true
};






console.log(kLengthApart(nums = [1,0,0,0,1,0,0,1], k = 2))
console.log(kLengthApart(nums = [1,0,0,1,0,1], k = 2))







// 1437. Check If All 1's Are at Least Length K Places Away
// Easy
// 587
// 218
// Companies
// Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

 

// Example 1:


// Input: nums = [1,0,0,0,1,0,0,1], k = 2
// Output: true
// Explanation: Each of the 1s are at least 2 places away from each other.
// Example 2:


// Input: nums = [1,0,0,1,0,1], k = 2
// Output: false
// Explanation: The second 1 and third 1 are only one apart from each other.
 

// Constraints:

// 1 <= nums.length <= 105
// 0 <= k <= nums.length
// nums[i] is 0 or 1
// Accepted
// 69.8K
// Submissions
// 119.6K
// Acceptance Rate
// 58.3%