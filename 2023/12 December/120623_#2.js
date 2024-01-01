const isValid = (s) => {
    if (s.length === 1) return false
    let current = []
    let openers = ["(", "[", "{"]
    if (openers.includes(s[0]) === false) return false
    for (let i = 0; i < s.length; i++){
        if ((current[current.length-1] === "(" && s[i]===")") || (current[current.length-1] === "[" && s[i]==="]") || (current[current.length-1] === "{" && s[i]==="}")){
            current.pop()
        }
        else {
            current.push(s[i])
        }
    }
    return current.length ? false : true
};




console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("(])"))







// 20. Valid Parentheses
// Easy
// Topics
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.