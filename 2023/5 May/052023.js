const canBeTypedWords = (text, brokenLetters) => {
    let textArray = text.split(" ")
    let count = 0
    for (let i=0;i<textArray.length;i++){
        let wordArray = textArray[i].split("")
        for (let j=0;j<wordArray.length;j++){
            if (brokenLetters.includes(wordArray[j])){
                break
            }
            else if (j===wordArray.length-1){
                count ++
                break
            }
        }
    }
    return count
};



console.log(canBeTypedWords("hello world", "ad"))
console.log(canBeTypedWords("leet code", "lt"))
console.log(canBeTypedWords("leet code", "e"))




// 1935. Maximum Number of Words You Can Type
// Easy
// 477
// 21
// Companies
// There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

// Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

 

// Example 1:

// Input: text = "hello world", brokenLetters = "ad"
// Output: 1
// Explanation: We cannot type "world" because the 'd' key is broken.
// Example 2:

// Input: text = "leet code", brokenLetters = "lt"
// Output: 1
// Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.
// Example 3:

// Input: text = "leet code", brokenLetters = "e"
// Output: 0
// Explanation: We cannot type either word because the 'e' key is broken.
 

// Constraints:

// 1 <= text.length <= 104
// 0 <= brokenLetters.length <= 26
// text consists of words separated by a single space without any leading or trailing spaces.
// Each word only consists of lowercase English letters.
// brokenLetters consists of distinct lowercase English letters.
// Accepted
// 44.1K
// Submissions
// 61.5K
// Acceptance Rate
// 71.7%