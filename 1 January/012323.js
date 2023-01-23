const equalizeArray = (arr) => {
    let minDeletions = arr.length-1
    for (let i=0; i<arr.length;i++){
        let tempMatchArray = [arr[i]]
        // console.log("tempMatchArray before j loop", tempMatchArray)
        for (let j=i+1; j<arr.length; j++){
            if (arr[i]==arr[j]){
                tempMatchArray.push(arr[j])
                // console.log("tempMatchArray after addition", tempMatchArray)
            }
        }
        // console.log("arr.length", arr.length, "minus tempMatchArray.length", tempMatchArray.length, "equals", (arr.length - tempMatchArray.length))
        if ((arr.length - tempMatchArray.length) < minDeletions){
            // console.log("minDeletions before alteration", minDeletions)
            minDeletions = arr.length - tempMatchArray.length
            // console.log("minDeletions after alteration", minDeletions)
        }
    }
    return minDeletions
}


// console.log(equalizeArray([1, 2, 2, 3]))
console.log(equalizeArray([3, 3, 2, 1, 3]))




// Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

// Example


// Delete the  elements  and  leaving . If both twos plus either the  or the  are deleted, it takes  deletions to leave either  or . The minimum number of deletions is .

// Function Description

// Complete the equalizeArray function in the editor below.

// equalizeArray has the following parameter(s):

// int arr[n]: an array of integers
// Returns

// int: the minimum number of deletions required
// Input Format

// The first line contains an integer , the number of elements in .
// The next line contains  space-separated integers .