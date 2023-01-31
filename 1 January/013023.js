const alternatingCharacters = (s) => {
    let augmentedString = [s[0]]
    let deletions = 0
    for (let i=1; i<s.length;i++){
        if (s[i] != s[i-1]){
            augmentedString.push(s[i])
        }
        else {
            deletions ++
        }
    }
    return deletions
}


console.log(alternatingCharacters("AABAAB"))
console.log(alternatingCharacters("AAAA"))
console.log(alternatingCharacters("BBBBB"))
console.log(alternatingCharacters("ABABABAB"))
console.log(alternatingCharacters("BABABA"))
console.log(alternatingCharacters("AAABBB"))


// You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// Example

// Remove an  at positions  and  to make  in  deletions.

// Function Description

// Complete the alternatingCharacters function in the editor below.

// alternatingCharacters has the following parameter(s):

// string s: a string
// Returns

// int: the minimum number of deletions required
// Input Format

// The first line contains an integer , the number of queries.
// The next  lines each contain a string  to analyze.