const similarPairs = (words) => {
    let count = 0
    for (let i=0; i<words.length-1;i++){
        let tempSet1 = new Set (words[i].split('').sort())
        let tempText1 = ""
        tempSet1.forEach((item)=>tempText1+=item)
        for (let j = i+1; j<words.length; j++){
            let tempSet2 = new Set(words[j].split('').sort())
            let tempText2 = ""
            tempSet2.forEach((item)=>tempText2+=item)
            if (tempText1 == tempText2){
                count ++
            }
        }
    }
    return count
};




console.log(similarPairs(["aba","aabb","abcd","bac","aabc"]))
console.log(similarPairs(["aabb","ab","ba"]))
console.log(similarPairs(["nba","cba","dba"]))






// 2506. Count Pairs Of Similar Strings
// Easy
// 368
// 27
// Companies
// You are given a 0-indexed string array words.

// Two strings are similar if they consist of the same characters.

// For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
// However, "abacba" and "bcfd" are not similar since they do not consist of the same characters.
// Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.

 

// Example 1:

// Input: words = ["aba","aabb","abcd","bac","aabc"]
// Output: 2
// Explanation: There are 2 pairs that satisfy the conditions:
// - i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'. 
// - i = 3 and j = 4 : both words[3] and words[4] only consist of characters 'a', 'b', and 'c'. 
// Example 2:

// Input: words = ["aabb","ab","ba"]
// Output: 3
// Explanation: There are 3 pairs that satisfy the conditions:
// - i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'. 
// - i = 0 and j = 2 : both words[0] and words[2] only consist of characters 'a' and 'b'.
// - i = 1 and j = 2 : both words[1] and words[2] only consist of characters 'a' and 'b'.
// Example 3:

// Input: words = ["nba","cba","dba"]
// Output: 0
// Explanation: Since there does not exist any pair that satisfies the conditions, we return 0.
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consist of only lowercase English letters.
// Accepted
// 28.3K
// Submissions
// 40.5K
// Acceptance Rate
// 69.8%