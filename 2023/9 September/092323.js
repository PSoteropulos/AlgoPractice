const sortString = (s) => {
    let sortedArr = s.split("").sort()
    let result = ''
    while (sortedArr.length) {
        console.log(sortedArr)
        let smallRunning = true
        let bigRunning = true
        if (sortedArr[0]) {
            result += sortedArr[0]
            sortedArr.splice(0,1)
        }
        while (smallRunning) {
            let smallChange = false
            for (let i=0;i<sortedArr.length;i++){
                if (sortedArr[i]>result[result.length-1]){
                    result += sortedArr[i]
                    sortedArr.splice(i,1)
                    smallChange = true
                    break
                }
            }
            if (!smallChange){
                smallRunning = false
            }
        }
        if (sortedArr[sortedArr.length-1]) {
            result += sortedArr[sortedArr.length-1]
            sortedArr.splice(sortedArr.length-1,1)
        }
        while (bigRunning) {
            let bigChange = false
            for (let i=sortedArr.length-1; i>=0; i--){
                if (sortedArr[i]<result[result.length-1]){
                    result += sortedArr[i]
                    sortedArr.splice(i,1)
                    bigChange = true
                    break
                }
            }
            if (!bigChange){
                bigRunning = false
            }
        }
    }
    return result
};






console.log(sortString("aaaabbbbcccc"))
console.log(sortString("rat"))







// 1370. Increasing Decreasing String
// Easy
// Topics
// Companies
// Hint
// You are given a string s. Reorder the string using the following algorithm:

// Pick the smallest character from s and append it to the result.
// Pick the smallest character from s which is greater than the last appended character to the result and append it.
// Repeat step 2 until you cannot pick more characters.
// Pick the largest character from s and append it to the result.
// Pick the largest character from s which is smaller than the last appended character to the result and append it.
// Repeat step 5 until you cannot pick more characters.
// Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

// Return the result string after sorting s with this algorithm.

 

// Example 1:

// Input: s = "aaaabbbbcccc"
// Output: "abccbaabccba"
// Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
// After steps 4, 5 and 6 of the first iteration, result = "abccba"
// First iteration is done. Now s = "aabbcc" and we go back to step 1
// After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
// After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
// Example 2:

// Input: s = "rat"
// Output: "art"
// Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.
 

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters.
// Accepted
// 69.4K
// Submissions
// 90.7K
// Acceptance Rate
// 76.5%