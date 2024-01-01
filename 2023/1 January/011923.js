function permutationEquation(p) {
    let yArray = []
    for (let x=1; x<= p.length; x++){
        // console.log("enter outer loop, x=", x)
        let firstIndex = 0
        let y = 0
        for (let i=0;i<p.length;i++){
            // console.log("first nested for", i, p[i])
            if (p[i] == x){
                firstIndex = i +1
                // console.log("firstindex", firstIndex)
            }
        }
        for (let j=0;j<p.length;j++){
            // console.log("second nested for", j, p[j])
            if (p[j] == firstIndex){
                y = j+1
                // console.log("y",y)
            }
        }
        console.log(`y = ${y}`)
        yArray.push(y)
    }
    return yArray
}

permutationEquation([5,2,1,3,4])
permutationEquation([2,3,1])
permutationEquation([4,3,5,1,2])







// Given a sequence of  integers,  where each element is distinct and satisfies . For each  where , that is  increments from  to , find any integer  such that  and keep a history of the values of  in a return array.

// Example


// Each value of  between  and , the length of the sequence, is analyzed as follows:

// , so 
// , so 
// , so 
// , so 
// , so 
// The values for  are .

// Function Description

// Complete the permutationEquation function in the editor below.

// permutationEquation has the following parameter(s):

// int p[n]: an array of integers
// Returns

// int[n]: the values of  for all  in the arithmetic sequence  to 
// Input Format

// The first line contains an integer , the number of elements in the sequence.
// The second line contains  space-separated integers  where .

// Constraints

// , where .
// Each element in the sequence is distinct.