const minPartitions = (n) => {
    let maxCount = 0
    let stringArray = n.split("")
    for (let i=0; i<n.length; i++){
        if (stringArray[i] > maxCount){
            maxCount = stringArray[i]
        }
    }
    return maxCount
};



console.log(minPartitions("332"))
console.log(minPartitions("82734"))
console.log(minPartitions("27346209830709182346"))




// 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
// Medium
// 2.1K
// 1.3K
// Companies
// A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

// Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

 

// Example 1:

// Input: n = "32"
// Output: 3
// Explanation: 10 + 11 + 11 = 32
// Example 2:

// Input: n = "82734"
// Output: 8
// Example 3:

// Input: n = "27346209830709182346"
// Output: 9
 

// Constraints:

// 1 <= n.length <= 105
// n consists of only digits.
// n does not contain any leading zeros and represents a positive integer.
// Accepted
// 169K
// Submissions
// 189.3K
// Acceptance Rate
// 89.3%