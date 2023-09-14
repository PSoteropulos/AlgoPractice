const thousandSeparator = (n) => {
    let stringArray = n.toString().split("")
    let running = true
    while (running) {
        let count = 0
        for (let i = stringArray.length;; i--){
            count ++
            if (!stringArray[i-1]){
                running = false
                break
            }
            else if (count === 4){
                stringArray.splice(i, 0, ".")
                count = 1
            }
        }
    }
    return stringArray.join("")
};







console.log(thousandSeparator(987))
console.log(thousandSeparator(1234))








// 1556. Thousand Separator
// Easy
// Topics
// Companies
// Hint
// Given an integer n, add a dot (".") as the thousands separator and return it in string format.

 

// Example 1:

// Input: n = 987
// Output: "987"
// Example 2:

// Input: n = 1234
// Output: "1.234"
 

// Constraints:

// 0 <= n <= 231 - 1
// Accepted
// 45.1K
// Submissions
// 83.3K
// Acceptance Rate
// 54.2%