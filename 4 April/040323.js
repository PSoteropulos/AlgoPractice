const leftRigthDifference = (nums) => {
    let leftSumArray = []
    let rightSumArray = []
    let answerArray = []
    for (let i=0; i<nums.length; i++){
        if (i === 0){
            leftSumArray.push(0)
        }
        else {
            // console.log(nums[i])
            leftSumArray.push(nums[i-1] + leftSumArray[i-1])
        }
    }
    for (let j=nums.length-1; j>=0; j--){
        console.log("index/j:",j)
        if (j === (nums.length-1)){
            rightSumArray.push(0)
        }
        else {
            console.log("nums[j+1]:",nums[j+1])
            console.log("rightsum[len-1]:",rightSumArray[0])
            rightSumArray.splice(0, 0, (nums[j+1] + rightSumArray[0]))
        }
        console.log("array:",rightSumArray)
    }
    for (let k=0; k<nums.length; k++){
        answerArray.push(Math.abs(leftSumArray[k]-rightSumArray[k]))
    }
    return answerArray
};



console.log(leftRigthDifference([10,4,8,3]))
// console.log(leftRigthDifference([1]))





// 2574. Left and Right Sum Differences
// Easy
// 366
// 18
// Companies
// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

 

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
// Example 2:

// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].
 

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 105
// Accepted
// 41.5K
// Submissions
// 46.8K
// Acceptance Rate
// 88.7%