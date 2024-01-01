function minimumDistances(a) {
    let minDist = 100000
    let matches = false
    for (let i=0;i<a.length;i++){
        for (let j=i+1;j<a.length;j++){
            if (a[i] == a[j]){
                matches = true
                if ((Math.abs(i - j))<minDist){
                    minDist=Math.abs(i - j)
                }
            }
        }
    }
    if (matches == true){
        return minDist
    }
    else {
        return -1
    }
}




console.log(minimumDistances([3,2,1,2,3]))
console.log(minimumDistances([7,1,3,4,1,7]))



// The distance between two array values is the number of indices between them. Given , find the minimum distance between any pair of equal elements in the array. If no such value exists, return .

// Example

// There are two matching pairs of values:  and . The indices of the 's are  and , so their distance is . The indices of the 's are  and , so their distance is . The minimum distance is .

// Function Description

// Complete the minimumDistances function in the editor below.

// minimumDistances has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the minimum distance found or  if there are no matching elements
// Input Format

// The first line contains an integer , the size of array .
// The second line contains  space-separated integers .

// Constraints

// Output Format

// Print a single integer denoting the minimum  in . If no such value exists, print .