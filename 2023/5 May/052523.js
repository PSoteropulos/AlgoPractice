// const intersection = (nums1, nums2) => {
//     let ansArray = []
    // if (nums1.length>nums2.length){
    //     for (let i=0; i<nums1.length; i++){
    //         if ((nums2.includes(nums1[i])===true) && (ansArray.includes(nums1[i])===false)){
    //             ansArray.push(nums1[i])
    //         }
    //     }
    // }
    // else {
    //     for (let j=0; j<nums2.length; j++){
    //         if ((nums1.includes(nums2[j])===true) && (ansArray.includes(nums2[j])===false)){
    //             ansArray.push(nums2[j])
    //         }
    //     }
    // }
    // return ansArray
// };


// optimized
const intersection = (nums1, nums2) => {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    const set1 = new Set(nums1);
    const intersectionSet = new Set();
    for (const num of nums2) {
        if (set1.has(num)) {
        intersectionSet.add(num);
        }
    }
    return Array.from(intersectionSet);
};


console.log(intersection([1,2,2,1], [2,2]))
console.log(intersection([4,9,5], [9,4,9,8,4]))




// 349. Intersection of Two Arrays
// Easy
// 4.7K
// 2.1K
// Companies
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
// Accepted
// 855.9K
// Submissions
// 1.2M
// Acceptance Rate
// 71.1%