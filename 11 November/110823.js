const duplicateZeros = (arr) => {
    let possibleDups = 0
    let newLength = arr.length - 1
    for (let i = 0; i <= newLength - possibleDups; i++) {
        if (arr[i] == 0) {
        if (i == newLength - possibleDups) {
            arr[newLength] = 0
            newLength -= 1
            break
        }
        possibleDups++
        }
    }
    for (let i = newLength-possibleDups; i >= 0; i--) {
        if (arr[i] == 0) {
            arr[i + possibleDups] = 0;
            possibleDups--;
            arr[i + possibleDups] = 0;
        } 
        else {
            arr[i + possibleDups] = arr[i];
        }
    }
}






console.log(duplicateZeros([1,0,2,3,0,4,5,0]))
console.log(duplicateZeros([1,2,3]))








// 1089. Duplicate Zeros
// Easy
// Topics
// Companies
// Hint
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]
 

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 9
// Accepted
// 383.9K
// Submissions
// 743.2K
// Acceptance Rate
// 51.7%