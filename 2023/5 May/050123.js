const hammingDistance = (x, y) => {
    let xString = x.toString(2)
    let yString = y.toString(2)
    let count = 0
    if (yString.length > xString.length){
        let xPadded = xString.padStart(yString.length, '0')
        for (let i=yString.length-1; i>=0;i--){
            if (xPadded[i] !== yString[i]){
                count ++
            }
        }
    }
    else {
        let yPadded = yString.padStart(xString.length, '0')
        for (let i=xString.length-1; i>=0;i--){
            if (xString[i] !== yPadded[i]){
                count ++
            }
        }
    }
    return count
};



// console.log(hammingDistance(1,4))
// console.log(hammingDistance(3,1))
console.log(hammingDistance(4,14))



// 461. Hamming Distance
// Easy
// 3.6K
// 210
// Companies
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

 

// Example 1:

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.
// Example 2:

// Input: x = 3, y = 1
// Output: 1
 

// Constraints:

// 0 <= x, y <= 231 - 1
// Accepted
// 523.2K
// Submissions
// 697.5K
// Acceptance Rate
// 75.0%