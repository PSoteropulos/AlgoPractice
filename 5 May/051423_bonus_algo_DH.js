//#1 Warmup = Print all even numbers from 0-10 to the console, including 0 as even
// const evenNums = () => {
//     for (i=0; i<=10; i++){
//         i%2 === 0? console.log(i) : null
//     }
// }

// evenNums()


// #2 Fizzbuzz - Write program that prints 1 to 100, but for multiples of 3 prints Fizz instead of the number , for mult of 5 print Buzz, for mult of BOTH print FizzBuzz 

const fizzBuzz = () => {
    for (i=1; i<=100; i++){
        if ((i % 5 === 0) && (i % 3 === 0)){
            console.log("FizzBuzz")
        }
        else if (i%3 === 0){
            console.log("Fizz")
        }
        else if (i%5 === 0){
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
}

fizzBuzz()

// #3 Vowel count = return the number (count) of vowels (a, e, i, o, u) in the given String, input with be only lower case letters or spaces


// #4 Given a non empty string of words, return the length of the shortest word(s)