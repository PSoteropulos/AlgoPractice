const commonFactors = (a, b) => {
    let factorCount = 0
    let higherNum = 0
    if (a > b){
        higherNum = a
    }
    else{
        higherNum = b
    }
    for (let i=1; i<= higherNum; i++){
        if ((a%i === 0) && (b%i === 0)){
            factorCount += 1
        }
    }
    return factorCount
};



console.log(commonFactors(12, 6))
console.log(commonFactors(25, 30))




// 2427. Number of Common Factors
// Easy
// 375
// 7
// Companies
// Given two positive integers a and b, return the number of common factors of a and b.

// An integer x is a common factor of a and b if x divides both a and b.

 

// Example 1:

// Input: a = 12, b = 6
// Output: 4
// Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.
// Example 2:

// Input: a = 25, b = 30
// Output: 2
// Explanation: The common factors of 25 and 30 are 1, 5.
 

// Constraints:

// 1 <= a, b <= 1000
// Accepted
// 45.6K
// Submissions
// 57.2K
// Acceptance Rate
// 79.8%