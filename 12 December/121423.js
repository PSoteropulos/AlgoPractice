const isIsomorphic = (s, t) => {
    let charObjectS = {} // first we set up two objects to hold the character to character mappings for each string
    let charObjectT = {} // do note that we need two objects since its possible one string has correct character mapping and the other does not
    for (let i = 0; i<s.length; i++){ //s and t are equal length so iterate through the length of either/both
        if ((s[i] in charObjectS && t[i] !== charObjectS[s[i]]) || (t[i] in charObjectT && s[i] !== charObjectT[t[i]])){
            return false //this guard clause first checks if the current character in s is already a key:value pair in our mapping object for s, and if it is then checks to see if the value at t corresponds to that mapping. If it does NOT then the strings are not isomorphic and we return false. We check for the flipside of that with t. If either fails, the strings are not isomorphic
        }
        charObjectS[s[i]] = t[i] //the next two lines assume the guard clause was not activated. Therefore (first) charObjectS[s[i]] isnt yet mapped OR it does equal t[i], and second is the flipped equivalent
        charObjectT[t[i]] = s[i]
    }
    return true //if the guard clause is never activated then the loop will execute fully and we will return true
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