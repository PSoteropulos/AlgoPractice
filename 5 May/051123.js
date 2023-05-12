const uniqueOccurrences = (arr) => {
    arr.sort((a,b)=>(a-b))
    let occurencesArray = []
    let occurenceCounter = 1
    for (let i=0; i<arr.length; i++){
        if (arr[i]===arr[i+1]){
            // console.log({i}, "array[i]", arr[i])
            // console.log("first if before increment", {occurencesArray})
            // console.log("first if before increment", {occurenceCounter})
            occurenceCounter ++
            // console.log("first if after increment", {occurencesArray})
            // console.log("first if after increment", {occurenceCounter})
        }
        else if (occurencesArray.includes(occurenceCounter) === false){
            // console.log({i}, "array[i]", arr[i])
            // console.log("first else if before push", {occurencesArray})
            // console.log("first else if before push", {occurenceCounter})
            occurencesArray.push(occurenceCounter)
            occurenceCounter = 1
            // console.log("first else if after push", {occurencesArray})
            // console.log("first else if after push", {occurenceCounter})
        }
        else if (occurencesArray.includes(occurenceCounter) === true){
            // console.log({i}, "array[i]", arr[i])
            // console.log("second else if", occurencesArray, "does contain", occurenceCounter )
            return false
        }
    }
    return true
};





console.log(uniqueOccurrences([1,2,2,1,1,3]))
console.log(uniqueOccurrences([1,2]))
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))




// 1207. Unique Number of Occurrences
// Easy
// 3.5K
// 77
// Companies
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
 

// Constraints:

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000
// Accepted
// 271.1K
// Submissions
// 368.8K
// Acceptance Rate
// 73.5%