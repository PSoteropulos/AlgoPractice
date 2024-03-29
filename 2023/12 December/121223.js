const isPowerOfFour = (n) => {
    if (n <= 0) { // handle edge cases
        return false
    }
    while (n !== 1) { // keep dividing by four until n is != 1
        if (n % 4 !== 0) { // if it isnt at any point divisible by 4 then we return false
            return false
        }
        n = n / 4 // otherwise keep dividing by four
    }
    // if the loop completes and n === 1 then its a power of four
    return true
};






console.log(isPowerOfFour(16))
console.log(isPowerOfFour(5))
console.log(isPowerOfFour(1))
console.log(isPowerOfFour(0))
console.log(isPowerOfFour(4))





// 342. Power of Four
// Easy
// Topics
// Companies
// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

 

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false
// Example 3:

// Input: n = 1
// Output: true
 

// Constraints:

// -231 <= n <= 231 - 1