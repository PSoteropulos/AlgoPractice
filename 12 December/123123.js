//optimized solution (removes unnecessary sort and accounts for comma separated words)
const mostCommonWord = (paragraph, banned) => {
    const bannedSet = new Set(banned.map(word => word.toLowerCase()))
    let wordMap = new Map()
    let maxFreqWord = ''
    let maxFreq = 0
    const words = paragraph.toLowerCase().replace(/[!?',;.]/g, ' ').split(/\s+/)
    for (const word of words) {
        if (!bannedSet.has(word)) {
            wordMap.set(word, (wordMap.get(word) || 0) + 1)
            if (wordMap.get(word) > maxFreq) {
                maxFreqWord = word
                maxFreq = wordMap.get(word)
            }
        }
    }
    return maxFreqWord
};


// original implementation (trouble with test case that had comma separated words instead of space)
// const mostCommonWord = (paragraph, banned) => {
//     let cleanParagraphArray = paragraph.replace(/[!?',;.]/g, '').split(" ")
//     let wordMap = new Map()
//     for (let i = 0; i <cleanParagraphArray.length; i++){
//         if (wordMap.has(cleanParagraphArray[i].toLowerCase())) {
//             wordMap.set(cleanParagraphArray[i].toLowerCase(), wordMap.get(cleanParagraphArray[i].toLowerCase()) + 1);
//         } else {
//             wordMap.set(cleanParagraphArray[i].toLowerCase(), 1);
//         }
//     }
//     let sortedArray = (Array.from(wordMap)).sort((a,b)=>b[1]-a[1])
//     for (let i = 0; i<sortedArray.length; i++){
//         if (!banned.includes(sortedArray[i][0])){
//             return sortedArray[i][0]
//         }
//     }
// }






console.log(mostCommonWord(paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]))
console.log(mostCommonWord(paragraph = "a.", banned = []))








// 819. Most Common Word
// Easy
// Topics
// Companies
// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

 

// Example 1:

// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.
// Example 2:

// Input: paragraph = "a.", banned = []
// Output: "a"
 

// Constraints:

// 1 <= paragraph.length <= 1000
// paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
// 0 <= banned.length <= 100
// 1 <= banned[i].length <= 10
// banned[i] consists of only lowercase English letters.