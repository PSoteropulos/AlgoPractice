const numJewelsInStones = (jewels, stones) => {
    let count = 0
    for (let i=0; i<jewels.length; i++){
        for (let j=0;j<stones.length;j++){
            if (jewels[i] == stones[j]){
                count ++
            }
        }
    }
    return count
};


console.log(numJewelsInStones("aA", "aAAbbbb"))
console.log(numJewelsInStones("z", "ZZ"))





// 771. Jewels and Stones
// Easy
// 4.3K
// 530
// Companies
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.