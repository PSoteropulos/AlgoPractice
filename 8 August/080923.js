const maxLengthBetweenEqualCharacters = (s) => {
    let array = s.split("")
    let maxDist = -1
    for (let i = 0; i<array.length-1;i++){
        let localDist = undefined
        for (let j=i+1;j<array.length;j++){
            if (array[i] === array[j]){
                localDist = j-1-i
            }
        }
        if (localDist > maxDist){
            maxDist = localDist
        }
    }
    return maxDist
};






console.log(maxLengthBetweenEqualCharacters("aa"))
console.log(maxLengthBetweenEqualCharacters("abca"))
console.log(maxLengthBetweenEqualCharacters("cbzxy"))








// 1624. Largest Substring Between Two Equal Characters
// Easy
// 579
// 32
// Companies
// Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

// A substring is a contiguous sequence of characters within a string.

 

// Example 1:

// Input: s = "aa"
// Output: 0
// Explanation: The optimal substring here is an empty substring between the two 'a's.
// Example 2:

// Input: s = "abca"
// Output: 2
// Explanation: The optimal substring here is "bc".
// Example 3:

// Input: s = "cbzxy"
// Output: -1
// Explanation: There are no characters that appear twice in s.
 

// Constraints:

// 1 <= s.length <= 300
// s contains only lowercase English letters.
// Accepted
// 44.2K
// Submissions
// 74.8K
// Acceptance Rate
// 59.0%