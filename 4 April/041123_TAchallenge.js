const lonelyinteger = (a) => {
    for (let i=0; i<a.length; i++){
        let occuredTwice = false
        for (let j=0; j<a.length; j++){
            if (a[j] === a[i] && (i !== j)){
                occuredTwice = true
            }
        }
        if (occuredTwice === false){
            return a[i]
        }
    }
}

console.log(lonelyinteger([1,2,3,4,3,2,1]))
console.log(lonelyinteger([1,2,3,4,5,4,6,6,3,2,1]))






// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example

// The unique element is .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once
// Input Format

// The first line contains a single integer, , the number of integers in the array.
// The second line contains  space-separated integers that describe the values in .

// Constraints

// It is guaranteed that  is an odd number and that there is one unique element.
// , where .