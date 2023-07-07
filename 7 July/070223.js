const isPrefixOfWord = (sentence, searchWord) => {
    let sentenceArray = sentence.split(" ")
    for (let i=0; i<sentenceArray.length; i++){
        if (sentenceArray[i].startsWith(searchWord)){
            return i+1
        }
    }
    return -1
};





console.log(isPrefixOfWord("i love eating burger", "burg"))
console.log(isPrefixOfWord("this problem is an easy problem", "pro"))
console.log(isPrefixOfWord("i am tired", "you"))







// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// Easy
// 735
// 33
// Companies
// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.

// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

// A prefix of a string s is any leading contiguous substring of s.

 

// Example 1:

// Input: sentence = "i love eating burger", searchWord = "burg"
// Output: 4
// Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.
// Example 2:

// Input: sentence = "this problem is an easy problem", searchWord = "pro"
// Output: 2
// Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.
// Example 3:

// Input: sentence = "i am tired", searchWord = "you"
// Output: -1
// Explanation: "you" is not a prefix of any word in the sentence.
 

// Constraints:

// 1 <= sentence.length <= 100
// 1 <= searchWord.length <= 10
// sentence consists of lowercase English letters and spaces.
// searchWord consists of lowercase English letters.
// Accepted
// 66.3K
// Submissions
// 103.4K
// Acceptance Rate
// 64.2%