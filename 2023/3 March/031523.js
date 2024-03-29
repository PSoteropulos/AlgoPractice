const countConsistentStrings = (allowed, words) => {
    let count = 0
    let allowedArray = allowed.split("")
    for (let i=0; i<words.length; i++){
        let localWordArray = words[i].split("")
        let valid = true
        for (let j=0; j<localWordArray.length; j++){
            if (allowed.includes(localWordArray[j])){
                valid = true
            }
            else {
                valid = false
                break
            }
        }
        if (valid === true){
            count ++
        }
    }
    return count
};



console.log(countConsistentStrings("ab",["ad","bd","aaab","baa","badab"]))
console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]))
console.log(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"]))




// 1684. Count the Number of Consistent Strings
// Easy
// 1.4K
// 55
// Companies
// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

 

// Example 1:

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
// Example 2:

// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.
// Example 3:

// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 

// Constraints:

// 1 <= words.length <= 104
// 1 <= allowed.length <= 26
// 1 <= words[i].length <= 10
// The characters in allowed are distinct.
// words[i] and allowed contain only lowercase English letters.
// Accepted
// 124.3K
// Submissions
// 151.2K
// Acceptance Rate
// 82.2%