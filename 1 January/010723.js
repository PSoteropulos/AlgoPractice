const divisibleSumPairs = (n, k, ar) => {
    let sortedArray = ar.sort(function(a, b){return a-b});
    // console.log(sortedArray)
    let pairTotal = 0;
    for (let i=0; i<n; i++){
        for (let j=i+1; j<n; j++){
            if ((sortedArray[i] + sortedArray[j])%k == 0){
                pairTotal ++
            }
        }
    }
    return pairTotal
}

console.log(divisibleSumPairs(6, 3, [1,3,2,6,1,2]))




// Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by .

// Example



// Three pairs meet the criteria:  and .

// Function Description

// Complete the divisibleSumPairs function in the editor below.

// divisibleSumPairs has the following parameter(s):

// int n: the length of array 
// int ar[n]: an array of integers
// int k: the integer divisor
// Returns
// - int: the number of pairs

// Input Format

// The first line contains  space-separated integers,  and .
// The second line contains  space-separated integers, each a value of .










// const getTotalX = (a, b) => {
//     let total = 0;
//     for (let i=0;){

//     }
// }

// console.log(getTotalX([2,4],[16,32,96]))




// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

// Example


// There are two numbers between the arrays:  and .
// , ,  and  for the first value.
// ,  and ,  for the second value. Return .

// Function Description

// Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

// getTotalX has the following parameter(s):

// int a[n]: an array of integers
// int b[m]: an array of integers
// Returns

// int: the number of integers that are between the sets
// Input Format

// The first line contains two space-separated integers,  and , the number of elements in arrays  and .
// The second line contains  distinct space-separated integers  where .
// The third line contains  distinct space-separated integers  where .