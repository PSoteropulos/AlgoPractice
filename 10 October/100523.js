const mostFrequentEven = (nums) => {
    nums.sort((a,b)=>b-a)
    let object = {}
    let maxOccurences = 0
    let most = -1
    for (let i = 0; i<nums.length;i++){
        if ((nums[i]%2===0) && (`${nums[i]}` in object)){
            object[`${nums[i]}`] += 1
        }
        else if (nums[i]%2===0){
            object[`${nums[i]}`] = 1
        }
        if (object[`${nums[i]}`] >= maxOccurences){
            maxOccurences = object[`${nums[i]}`]
            most = nums[i]
        }
    }
    return most
};







console.log(mostFrequentEven([0,1,2,2,4,4,1]))
console.log(mostFrequentEven([4,4,4,9,2,4]))
console.log(mostFrequentEven([29,47,21,41,13,37,25,7]))
console.log(mostFrequentEven([8154,9139,8194,3346,5450,9190,133,8239,4606,8671,8412,6290]))







// 2404. Most Frequent Even Element
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums, return the most frequent even element.

// If there is a tie, return the smallest one. If there is no such element, return -1.

 

// Example 1:

// Input: nums = [0,1,2,2,4,4,1]
// Output: 2
// Explanation:
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.
// Example 2:

// Input: nums = [4,4,4,9,2,4]
// Output: 4
// Explanation: 4 is the even element appears the most.
// Example 3:

// Input: nums = [29,47,21,41,13,37,25,7]
// Output: -1
// Explanation: There is no even element.
 

// Constraints:

// 1 <= nums.length <= 2000
// 0 <= nums[i] <= 105
// Accepted
// 60.6K
// Submissions
// 120.4K
// Acceptance Rate
// 50.3%