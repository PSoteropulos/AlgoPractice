const canConstruct = (ransomNote, magazine) => {
    let ransomNoteArray = ransomNote.split("").sort()
    let magazineArray = magazine.split("").sort()
    let running = true
    while (running) {
        let changed = false
        for (let i = ransomNoteArray.length-1; i>=0; i--){
            if (magazineArray.includes(ransomNoteArray[i])){
                let index = magazineArray.indexOf(ransomNoteArray[i])
                ransomNoteArray.splice(i, 1)
                magazineArray.splice(index, 1)
                changed = true
            }
        }
        if (changed === false){
            running = false
        }
    }
    return ransomNoteArray.length === 0 ? true : false
};







// console.log(canConstruct("a", "b"))
// console.log(canConstruct("aa", "ab"))
// console.log(canConstruct("aa", "aab"))
console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"))






// 383. Ransom Note
// Easy
// 4.3K
// 443
// Companies
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.
// Accepted
// 838.5K
// Submissions
// 1.4M
// Acceptance Rate
// 58.9%