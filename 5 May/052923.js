const fizzBuzz = (n) => {
    let ansArray = []
    for (let i=1; i<=n; i++){
        if (i%5===0 && i%3===0){
            ansArray.push("FizzBuzz")
        }
        else if (i%5===0){
            ansArray.push("Buzz")
        }
        else if (i%3===0){
            ansArray.push("Fizz")
        }
        else {
            ansArray.push(i.toString())
        }
    }
    return ansArray
};



console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))




// 412. Fizz Buzz
// Easy
// 2K
// 268
// Companies
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

// Constraints:

// 1 <= n <= 104
// Accepted
// 976.2K
// Submissions
// 1.4M
// Acceptance Rate
// 70.2%