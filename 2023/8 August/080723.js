const findSpecialInteger = (arr) => {
    arr.sort((a,b)=>a-b)
    let average = arr.length/4
    // let average = Math.floor(arr.length/4)
    let count = 0
    for (let i=0; i<arr.length; i++){
        if (arr[i]===arr[i-1]){
            count ++
        }
        else {
            count =1
        }
        if (count > average){
            return arr[i]
        }
    }
};







console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]))
console.log(findSpecialInteger([1,1]))







// 1287. Element Appearing More Than 25% In Sorted Array
// Easy
// 868
// 44
// Companies
// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

 

// Example 1:

// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6
// Example 2:

// Input: arr = [1,1]
// Output: 1
 

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 105
// Accepted
// 81.4K
// Submissions
// 137.6K
// Acceptance Rate
// 59.2%