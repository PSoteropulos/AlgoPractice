const countQuadruplets = (s) => {
    let count = 0
    for (let i = 0; i<s.length-3; i++){
        for (let j=i+1; j<s.length-2;j++){
            for(let k=j+1;k<s.length-1;k++){
                for(let l=k+1; l<s.length;l++){
                    if((s[i]+s[j]+s[k]===s[l]) && (i<j<k<l)){
                        count ++
                    }
                }
            }
        }
    }
    return count
};






console.log(countQuadruplets([1,2,3,6]))
console.log(countQuadruplets([3,3,6,4,5]))
console.log(countQuadruplets([1,1,1,3,5]))
console.log(countQuadruplets([90,16,81,40,15,16,61,9,99,44,1,93]))






// 387. First Unique Character in a String
// Easy
// 8K
// 257
// Companies
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.
// Accepted
// 1.4M
// Submissions
// 2.4M
// Acceptance Rate
// 59.9%