const longestCommonPrefix = (strs) => {
    let actual = ""
    strs.sort((a,b)=> b.length-a.length)
    for (let i = 0; i < strs[0].length; i++){
        let valid = true
        for (let j=0; j<strs.length; j++){
            if (strs[j][i] !== strs[0][i]){
                valid = false
                break
            }
            else if (valid && j==strs.length-1){
                actual += strs[0][i]
            }
        }
        if (!valid) break
    }
    return actual
};






console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))








// 14. Longest Common Prefix
// Attempted
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.