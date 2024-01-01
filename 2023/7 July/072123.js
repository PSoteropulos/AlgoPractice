const largestInteger = (num) => {
    let odds = []
    let evens = []
    let numString = num.toString()
    let newNum = ""
    for (let i =0; i<numString.length; i++){
        if (numString[i]%2===0){
            evens.push(numString[i])
        }
        else {
            odds.push(numString[i])
        }
    }
    odds.sort((a,b)=>b-a)
    evens.sort((a,b)=>b-a)
    for (let j=0; j<numString.length; j++){
        if (numString[j]%2===0){
            newNum += evens[0]
            evens.splice(0,1)
        }
        else {
            newNum += odds[0]
            odds.splice(0,1)
        }
    }
    return newNum
};







console.log(largestInteger(1234))
console.log(largestInteger(65875))







// 2231. Largest Number After Digit Swaps by Parity
// Easy
// 503
// 272
// Companies
// You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).

// Return the largest possible value of num after any number of swaps.

 

// Example 1:

// Input: num = 1234
// Output: 3412
// Explanation: Swap the digit 3 with the digit 1, this results in the number 3214.
// Swap the digit 2 with the digit 4, this results in the number 3412.
// Note that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number.
// Also note that we may not swap the digit 4 with the digit 1 since they are of different parities.
// Example 2:

// Input: num = 65875
// Output: 87655
// Explanation: Swap the digit 8 with the digit 6, this results in the number 85675.
// Swap the first digit 5 with the digit 7, this results in the number 87655.
// Note that there may be other sequences of swaps but it can be shown that 87655 is the largest possible number.
 

// Constraints:

// 1 <= num <= 109
// Accepted
// 34.1K
// Submissions
// 56.3K
// Acceptance Rate
// 60.6%