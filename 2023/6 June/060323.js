const findWords = (words) => {
    let row1 = "qwertyuiop"
    let row2 = "asdfghjkl"
    let row3 = "zxcvbnm"
    let ansArray = []
    for (let i = 0; i<words.length; i++){
        let valid = true
        let includedInRow = undefined
        if (row1.includes(words[i][0].toLowerCase())){
            includedInRow = row1
        }
        else if (row2.includes(words[i][0].toLowerCase())){
            includedInRow = row2
        }
        else if (row3.includes(words[i][0].toLowerCase())){
            includedInRow = row3
        }
        for (let j = 1; j<words[i].length; j++){
            if (!includedInRow.includes(words[i][j].toLowerCase())){
                valid = false
            }
        }
        if (valid) ansArray.push(words[i]) 
    }
    return ansArray
};




console.log(findWords(["Hello","Alaska","Dad","Peace"]))
console.log(findWords(["omk"]))
console.log(findWords(["adsdf","sfd"]))






// 500. Keyboard Row
// Easy
// 1.4K
// 1.1K
// Companies
// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

 

// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]
// Example 2:

// Input: words = ["omk"]
// Output: []
// Example 3:

// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]
 

// Constraints:

// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] consists of English letters (both lowercase and uppercase). 
// Accepted
// 187.9K
// Submissions
// 269.8K
// Acceptance Rate
// 69.6%