const birthday = (s, d, m) => {
    let solutions = 0;
    for (let i=0;i<s.length;i++){
        let total = s[i];
        // console.log("total start", total)
        let lengthCounterFromMonth = 1;
        // console.log("counter before while", lengthCounterFromMonth)
        while (lengthCounterFromMonth < m && total < d){
            // console.log("counter in while before add", lengthCounterFromMonth)
            // console.log("total in while before add",total)
            total += s[i + lengthCounterFromMonth]
            lengthCounterFromMonth ++
            // console.log("counter in while after add", lengthCounterFromMonth)
            // console.log("total in while after add", total)
            }
        if (total == d && lengthCounterFromMonth ==m) {
            // console.log("adding to solutions, total is", total)
            solutions ++
            // console.log("solutions", solutions)
        }
    }
    return solutions
}

// console.log(birthday([1,2,1,3,2],3,2))
// console.log(birthday([1,1,1,1,1],3,2))
// console.log(birthday([4],4,1))


// values of s[whatever] add up to d (birthday, 1-31)

// m (birth month) is how many segments to add together (1-12)




// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Example



// Lily wants to find segments summing to Ron's birth day,  with a length equalling his birth month, . In this case, there are two segments meeting her criteria:  and .

// Function Description

// Complete the birthday function in the editor below.

// birthday has the following parameter(s):

// int s[n]: the numbers on each of the squares of chocolate
// int d: Ron's birth day
// int m: Ron's birth month
// Returns

// int: the number of ways the bar can be divided
// Input Format

// The first line contains an integer , the number of squares in the chocolate bar.
// The second line contains  space-separated integers , the numbers on the chocolate squares where .
// The third line contains two space-separated integers,  and , Ron's birth day and his birth month.