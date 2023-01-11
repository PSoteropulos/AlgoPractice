function extraLongFactorials(n) {
    let total = BigInt(n)
    for (let i=n-1;i>=1;i--){
        total *= BigInt(i)
    }
    console.log(total.toString().replace('n',""))
}

extraLongFactorials(25)

// The factorial of the integer , written , is defined as:

// Calculate and print the factorial of a given integer.

// For example, if , we calculate  and get .

// Function Description

// Complete the extraLongFactorials function in the editor below. It should print the result and return.

// extraLongFactorials has the following parameter(s):

// n: an integer
// Note: Factorials of  can't be stored even in a  long long variable. Big integers must be used for such calculations. Languages like Java, Python, Ruby etc. can handle big integers, but we need to write additional code in C/C++ to handle huge values.

// We recommend solving this challenge using BigIntegers.

// Input Format

// Input consists of a single integer 