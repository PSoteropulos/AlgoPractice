const minNumber = (nums1, nums2) => {
    for (let i = 1; i<10;i++){
        if (nums1.includes(i) && nums2.includes(i)){
            return i
        }
    }
    nums1.sort((a,b)=>a-b)
    nums2.sort((a,b)=>a-b)
    if (nums1[0]<nums2[0]){
        return Number(nums1[0].toString()+nums2[0].toString())
    }
    else {
        return Number(nums2[0].toString()+nums1[0].toString())
    }
};






console.log(minNumber(nums1 = [4,1,3], nums2 = [5,7]))
console.log(minNumber(nums1 = [3,5,2,6], nums2 = [3,1,7]))








// 2605. Form Smallest Number From Two Digit Arrays
// Easy
// Topics
// Companies
// Hint
// Given two arrays of unique digits nums1 and nums2, return the smallest number that contains at least one digit from each array.
 

// Example 1:

// Input: nums1 = [4,1,3], nums2 = [5,7]
// Output: 15
// Explanation: The number 15 contains the digit 1 from nums1 and the digit 5 from nums2. It can be proven that 15 is the smallest number we can have.
// Example 2:

// Input: nums1 = [3,5,2,6], nums2 = [3,1,7]
// Output: 3
// Explanation: The number 3 contains the digit 3 which exists in both arrays.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 9
// 1 <= nums1[i], nums2[i] <= 9
// All digits in each array are unique.
// Accepted
// 29.1K
// Submissions
// 54.9K
// Acceptance Rate
// 53.0%