const arrayStringsAreEqual = (word1, word2) => {
    let word1String = ""
    let word2String = ""
    for (let i = 0; i<word1.length; i++){
        word1String = word1String.concat(word1[i])
    }
    for (let j = 0; j<word2.length; j++){
        word2String = word2String.concat(word2[j])
    }
    return word1String==word2String ? true : false
};



console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]))
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]))




// 1662. Check If Two String Arrays are Equivalent
// Easy
// 2.1K
// 172
// Companies
// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

 

// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Example 2:

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false
// Example 3:

// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true
 

// Constraints:

// 1 <= word1.length, word2.length <= 103
// 1 <= word1[i].length, word2[i].length <= 103
// 1 <= sum(word1[i].length), sum(word2[i].length) <= 103
// word1[i] and word2[i] consist of lowercase letters.
// Accepted
// 263.3K
// Submissions
// 315.6K
// Acceptance Rate
// 83.4%