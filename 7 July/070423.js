const stringMatching = (words) => {
    let ansArray = []
    for (let i=0;i<words.length;i++){
        for (let j=0;j<words.length;j++){
            if (words[i]!==words[j] && words[i].includes(words[j])){
                ansArray.push(words[j])
            }
        }
    }
    let setArray = new Set(ansArray)
    let newArray = Array.from(setArray)
    return newArray
};






console.log(stringMatching(["mass","as","hero","superhero"]))
console.log(stringMatching(["leetcode","et","code"]))
console.log(stringMatching(["blue","green","bu"]))
console.log(stringMatching(["leetcoder","leetcode","od","hamlet","am"]))






// 1408. String Matching in an Array
// Easy
// 792
// 84
// Companies
// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

// A substring is a contiguous sequence of characters within a string

 

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".
// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []
// Explanation: No string of words is substring of another string.
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 30
// words[i] contains only lowercase English letters.
// All the strings of words are unique.
// Accepted
// 72.7K
// Submissions
// 114.2K
// Acceptance Rate
// 63.6%