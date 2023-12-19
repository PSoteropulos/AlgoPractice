const isIsomorphic = (s, t) => {
    let charObjectS = {}
    let charObjectT = {}
    for (let i = 0; i<s.length; i++){
        if ((s[i] in charObjectS && t[i] !== charObjectS[s[i]]) || (t[i] in charObjectT && s[i] !== charObjectT[t[i]])){
            return false
        }
        else if ((s[i] in charObjectS && t[i] === charObjectS[s[i]]) && (t[i] in charObjectT && s[i] === charObjectT[t[i]])){
            continue
        }
        else {
            if (s[i] in charObjectS === false){
                charObjectS[s[i]] = t[i]
            }
            if (t[i] in charObjectT === false){
                charObjectT[t[i]] = s[i]
            }
        }
    }
    return true
};






console.log(isIsomorphic(s = "egg", t = "add"))
console.log(isIsomorphic(s = "foo", t = "bar"))
console.log(isIsomorphic(s = "paper", t = "title"))
console.log(isIsomorphic(s = "badc", t = "baba"))








// 205. Isomorphic Strings
// Easy
// Topics
// Companies
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.