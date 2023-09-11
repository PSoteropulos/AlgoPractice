const strongPasswordCheckerII = (password) => {
    let length = true
    let oneLower = false
    let oneUpper = false
    let oneDigit = false
    let oneSpecial = false
    let adjacent = true
    let specials = "!@#$%^&*()-+"
    if (password.length < 8){
        length = false
    }
    for (let i=0; i<password.length; i++){
        if ((password[i] === password[i].toUpperCase()) && (password[i].toLowerCase()!==password[i].toUpperCase())){
            oneUpper = true
        }
        if ((password[i] === password[i].toLowerCase())&& (password[i].toLowerCase()!==password[i].toUpperCase())){
            oneLower = true
        }
        if (isNaN(password[i])===false){
            oneDigit = true
        }
        if (specials.includes(password[i])){
            oneSpecial = true
        }
        if (i < password.length - 1){
            if (password[i] === password[i+1]){
                adjacent = false
            }
        }
    }
    if (length && oneUpper && oneLower && oneDigit && oneSpecial && adjacent){
        return true
    }
    else {
        return false
    }
};







console.log(strongPasswordCheckerII("IloveLe3tcode!"))
console.log(strongPasswordCheckerII("Me+You--IsMyDream"))
console.log(strongPasswordCheckerII("1aB!"))
console.log(strongPasswordCheckerII("&3@396+&532#1)5^*^*56$269)(-54(3)7&)@1^)8)(@*@23#-%3189)45+6&8%0756!6+!+6"))








// 2299. Strong Password Checker II
// Easy
// 302
// 36
// Companies
// A password is said to be strong if it satisfies all the following criteria:

// It has at least 8 characters.
// It contains at least one lowercase letter.
// It contains at least one uppercase letter.
// It contains at least one digit.
// It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
// It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
// Given a string password, return true if it is a strong password. Otherwise, return false.

 

// Example 1:

// Input: password = "IloveLe3tcode!"
// Output: true
// Explanation: The password meets all the requirements. Therefore, we return true.
// Example 2:

// Input: password = "Me+You--IsMyDream"
// Output: false
// Explanation: The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.
// Example 3:

// Input: password = "1aB!"
// Output: false
// Explanation: The password does not meet the length requirement. Therefore, we return false.
 

// Constraints:

// 1 <= password.length <= 100
// password consists of letters, digits, and special characters: "!@#$%^&*()-+".
// Accepted
// 34.4K
// Submissions
// 62.2K
// Acceptance Rate
// 55.3%