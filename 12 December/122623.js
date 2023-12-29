const firstUniqChar = (s) => {
    let occurrences = new Map()
    for (let i = 0; i<s.length; i++){
        if (occurrences.has(s[i])) {
            occurrences.set(s[i], occurrences.get(s[i]) + 1);
        } else {
            occurrences.set(s[i], 1);
        }
    }
    for (let i = 0; i<s.length; i++){
        if (occurrences.get(s[i]) === 1){
            return i
        }
    }
    return -1
}






console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqChar("aabb"))








// 387. First Unique Character in a String
// Attempted
// Easy
// Topics
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