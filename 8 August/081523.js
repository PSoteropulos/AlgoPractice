const oddString = (words) => {
    let differenceArray = []
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for (let i=0; i<words.length; i++){
        let localArray = []
        for (let j=0;j<words[i].length -1; j++){
            localArray.push(alphabet.indexOf(words[i][j+1]) - alphabet.indexOf(words[i][j]))
        }
        differenceArray.push(localArray)
    }
    let oddOutIndex = undefined
    for (let k=0; k<differenceArray.length-2; k++){
        for(let h=0;h<differenceArray[k].length;h++){
            if(differenceArray[k][h] === differenceArray[k+1][h]){
                if (differenceArray[k][h] !== differenceArray[k+2][h]){
                    oddOutIndex = k+2
                }
            }
            else {
                if (differenceArray[k+1][h] === differenceArray[k+2][h]){
                    oddOutIndex = k
                }
                else {
                    oddOutIndex = k + 1
                }
            }
        }
    }
    return words[oddOutIndex]
};






// console.log(oddString(["adc","wzy","abc"]))
// console.log(oddString(["aaa","bob","ccc","ddd"]))
console.log(oddString(["aaaba","sssts","vvvwv","sssts","ooopo","rrrsr","iiiji","pppqp","aabbb","xxxyx","nnnon","bbbcb","hhhih","jjjkj","hhhih","kkklk","yyyzy","jjjkj","nnnon","eeefe","eeefe","ggghg","sssts","cccdc","rrrsr"]))






// 2451. Odd String Difference
// Easy
// 337
// 101
// Companies
// You are given an array of equal-length strings words. Assume that the length of each string is n.

// Each string words[i] can be converted into a difference integer array difference[i] of length n - 1 where difference[i][j] = words[i][j+1] - words[i][j] where 0 <= j <= n - 2. Note that the difference between two letters is the difference between their positions in the alphabet i.e. the position of 'a' is 0, 'b' is 1, and 'z' is 25.

// For example, for the string "acb", the difference integer array is [2 - 0, 1 - 2] = [2, -1].
// All the strings in words have the same difference integer array, except one. You should find that string.

// Return the string in words that has different difference integer array.

 

// Example 1:

// Input: words = ["adc","wzy","abc"]
// Output: "abc"
// Explanation: 
// - The difference integer array of "adc" is [3 - 0, 2 - 3] = [3, -1].
// - The difference integer array of "wzy" is [25 - 22, 24 - 25]= [3, -1].
// - The difference integer array of "abc" is [1 - 0, 2 - 1] = [1, 1]. 
// The odd array out is [1, 1], so we return the corresponding string, "abc".
// Example 2:

// Input: words = ["aaa","bob","ccc","ddd"]
// Output: "bob"
// Explanation: All the integer arrays are [0, 0] except for "bob", which corresponds to [13, -13].
 

// Constraints:

// 3 <= words.length <= 100
// n == words[i].length
// 2 <= n <= 20
// words[i] consists of lowercase English letters.
// Accepted
// 23.2K
// Submissions
// 39.5K
// Acceptance Rate
// 58.8%