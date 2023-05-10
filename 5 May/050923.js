const twoOutOfThree = (nums1, nums2, nums3) => {
    nums1.sort((a,b)=>(a-b))
    nums2.sort((a,b)=>(a-b))
    nums3.sort((a,b)=>(a-b))
    console.log({num1:nums1, num2:nums2, num3:nums3})
    let obj = {}
    let answerArray = []
    for (let i = 0; i<nums1.length;i++){
        if ((`${nums1[i]}` in obj) === false){
            obj[nums1[i]] = 1
        }
    }
    for (let j = 0; j<nums2.length;j++){
        if ((`${nums2[j]}` in obj) === false){
            obj[nums2[j]] = 1
        }
        else if (((`${nums2[j]}` in obj) === true) && (nums2[j] !== nums2[j-1])){
            obj[nums2[j]] ++
        }
    }
    for (let h = 0; h<nums3.length;h++){
        if ((`${nums3[h]}` in obj) === false){
            obj[nums3[h]] = 1
        }
        else if (((`${nums3[h]}` in obj) === true) && (nums3[h] !== nums3[h-1])){
            obj[nums3[h]] ++
        }
    }
    for (const [key, value] of Object.entries(obj)){
        if (value > 1){
            answerArray.push(key)
        }
    }
    return answerArray
};




// console.log(twoOutOfThree([1,1,3,2], [2,3], [3]))
// console.log(twoOutOfThree([3,1], [2,3], [1,2]))
// console.log(twoOutOfThree([1,2,2], [4,3,3], [5]))
console.log(twoOutOfThree([2,15,10,11,14,12,14,11,9,1], [8,9,13,2,11,8], [13,5,15,7,12,7,8,3,13,15]))


// 2032. Two Out of Three
// Easy
// 603
// 35
// Companies
// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
 

// Example 1:

// Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
// Output: [3,2]
// Explanation: The values that are present in at least two arrays are:
// - 3, in all three arrays.
// - 2, in nums1 and nums2.
// Example 2:

// Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
// Output: [2,3,1]
// Explanation: The values that are present in at least two arrays are:
// - 2, in nums2 and nums3.
// - 3, in nums1 and nums2.
// - 1, in nums1 and nums3.
// Example 3:

// Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
// Output: []
// Explanation: No value is present in at least two arrays.
 

// Constraints:

// 1 <= nums1.length, nums2.length, nums3.length <= 100
// 1 <= nums1[i], nums2[j], nums3[k] <= 100
// Accepted
// 47.7K
// Submissions
// 64.8K
// Acceptance Rate
// 73.6%