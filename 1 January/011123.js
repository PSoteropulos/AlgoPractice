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


// const catAndMouse = (queries) => {
//     for (let i=0;i<queries.length;i++){
//         // console.log(i)
//         // console.log(queries[i])
//         if (Math.abs(queries[i][2]-queries[i][1]) > Math.abs(queries[i][2]-queries[i][0])){
//             return "Cat A"
//         }
//         else if (Math.abs(queries[i][2]-queries[i][0]) > Math.abs(queries[i][2]-queries[i][1])){
//             return "Cat B"
//         }
//         else if (Math.abs(queries[i][2]-queries[i][0]) == Math.abs(queries[i][2]-queries[i][1])){
//             return "Mouse C"
//         }
//     }
// }

const catAndMouse = (x, y, z) => {
    if (Math.abs(z-y) > Math.abs(z-x)){
        return "Cat A"
    }
    else if (Math.abs(z-x) > Math.abs(z-y)){
        return "Cat B"
    }
    else if (Math.abs(z-x) == Math.abs(z-y)){
        return "Mouse C"
    }
}


console.log(catAndMouse(1,3,2))


// Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

// You are given  queries in the form of , , and  representing the respective positions for cats  and , and for mouse . Complete the function  to return the appropriate answer to each query, which will be printed on a new line.

// If cat  catches the mouse first, print Cat A.
// If cat  catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
// Example




// The cats are at positions  (Cat A) and  (Cat B), and the mouse is at position . Cat B, at position  will arrive first since it is only  unit away while the other is  units away. Return 'Cat B'.

// Function Description

// Complete the catAndMouse function in the editor below.

// catAndMouse has the following parameter(s):

// int x: Cat 's position
// int y: Cat 's position
// int z: Mouse 's position
// Returns

// string: Either 'Cat A', 'Cat B', or 'Mouse C'
// Input Format

// The first line contains a single integer, , denoting the number of queries.
// Each of the  subsequent lines contains three space-separated integers describing the respective values of  (cat 's location),  (cat 's location), and  (mouse 's location).