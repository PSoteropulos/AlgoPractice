const commonChars = (words) => {
    let commonChars = words[0].split('')
    for (let i = 1; i < words.length; i++) {
        let tempCommonChars = []
        for (let j = 0; j < commonChars.length; j++) {
            let char = commonChars[j]
            if (words[i].includes(char)) {
                tempCommonChars.push(char)
                words[i] = words[i].replace(char, '')
            }
        }
        commonChars = tempCommonChars
    }
    return commonChars
}







console.log(commonChars(["bella","label","roller"]))
console.log(commonChars(["cool","lock","cook"]))








// 1002. Find Common Characters
// Easy
// Topics
// Companies
// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.