function pickingNumbers(a) {
    let maxLength = 0
    for (let i=0; i< a.length; i++){
        let tempArrayPlus = [a[i]]
        // console.log(tempArrayPlus)
        for (let j=i+1; j<a.length; j++){
            if ((a[j]==a[i]) || (a[j]==(a[i]+1))){
                tempArrayPlus.push(a[j])
            }
            if (tempArrayPlus.length > maxLength){
                maxLength = tempArrayPlus.length
            }
        }
        // console.log(tempArrayPlus)
        let tempArrayMinus = [a[i]]
        // console.log(tempArrayMinus)
        for (let j=i+1; j<a.length; j++){
            if ((a[j]==a[i]) || (a[j]==(a[i]-1))){
                tempArrayMinus.push(a[j])
            }
            if (tempArrayMinus.length > maxLength){
                maxLength = tempArrayMinus.length
            }
        }
        // console.log(tempArrayMinus)
    }
    return maxLength
}


console.log(pickingNumbers([4,6,5,3,3,1]))





// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to .

// Example


// There are two subarrays meeting the criterion:  and . The maximum length subarray has  elements.

// Function Description

// Complete the pickingNumbers function in the editor below.

// pickingNumbers has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the length of the longest subarray that meets the criterion
// Input Format

// The first line contains a single integer , the size of the array .
// The second line contains  space-separated integers, each an .

