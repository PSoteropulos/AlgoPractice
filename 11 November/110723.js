const gcdOfStrings = (str1, str2) => {
    let longerString = str1.length >= str2.length ? str1 : str2
    let shorterString = str1.length < str2.length ? str1 : str2
    let stringWeCheck = shorterString
    while (stringWeCheck.length > 0) {
        if (longerString.length % stringWeCheck.length === 0 && shorterString.length % stringWeCheck.length === 0) {
            let valid = true
            for (let i = 0; i < longerString.length; i += stringWeCheck.length) {
                if (longerString.substring(i, i + stringWeCheck.length) !== stringWeCheck) {
                    valid = false
                    break
                }
            }
            if (valid) {
                for (let i = 0; i < shorterString.length; i += stringWeCheck.length) {
                    if (shorterString.substring(i, i + stringWeCheck.length) !== stringWeCheck) {
                        valid = false
                        break
                    }
                }
            }
            if (valid) return stringWeCheck
        }
        stringWeCheck = stringWeCheck.slice(0, -1)
    }
    return ""
};






console.log(gcdOfStrings(str1 = "ABCABC", str2 = "ABC"))
console.log(gcdOfStrings(str1 = "ABABAB", str2 = "ABAB"))
console.log(gcdOfStrings(str1 = "LEET", str2 = "CODE"))








// 1071. Greatest Common Divisor of Strings
// Easy
// Topics
// Companies
// Hint
// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.