const reverseVowels = (s) => {
    let vowelList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let newVowels = []
    let answerString = ""
    for (let i=0; i<s.length; i++){
        if (vowelList.includes(s[i])){
            newVowels.push(s[i])
        }
    }
    for (let i = 0; i<s.length; i++){
        if (vowelList.includes(s[i])){
            answerString += newVowels[newVowels.length-1]
            newVowels.pop()
        }
        else {
            answerString += s[i]
        }
    }
    return answerString
};







console.log(reverseVowels("hello"))
console.log(reverseVowels("leetcode"))








// 345. Reverse Vowels of a String
// Easy
// Topics
// Companies
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.
// Accepted
// 629.4K
// Submissions
// 1.2M
// Acceptance Rate
// 51.3%