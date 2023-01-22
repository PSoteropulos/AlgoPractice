const cutTheSticks = (arr) => {
    let sortedArray = arr.sort(function(a, b){return a - b});
    let manipulatedArray = sortedArray
    let whatsLeftArray = [arr.length]
    console.log("whats left array before while", whatsLeftArray)
    console.log("manipulated array outside of while", manipulatedArray)
    while (manipulatedArray.length >1){
        let tempArray = []
        console.log("tempArray in while before for", tempArray)
        for (let i = 0; i<manipulatedArray.length; i++){
            let newVal = manipulatedArray[i] - manipulatedArray[0]
            console.log("newval right after calculation", newVal)
            if (newVal >= 1){
                tempArray.push(newVal)
                console.log("tempArray in for at value add", tempArray)
            }
            if (i == manipulatedArray.length-1){
                manipulatedArray = tempArray
                console.log("manipulated array inside of for loop", manipulatedArray)
                if (tempArray.length > 0){
                    whatsLeftArray.push(tempArray.length)
                    console.log("whats left array at end of for", whatsLeftArray)
                }
            }
        }
    }
    return whatsLeftArray
}

console.log(cutTheSticks([1,2,3]))
console.log(cutTheSticks([5,4,4,2,2,8]))
console.log(cutTheSticks([1,2,3,4,3,3,2,1]))
console.log(cutTheSticks([8,8,14,10,3,5,14,12]))








// You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

// Given the lengths of  sticks, print the number of sticks that are left before each iteration until there are none left.

// Example

// The shortest stick length is , so cut that length from the longer two and discard the pieces of length . Now the lengths are . Again, the shortest stick is of length , so cut that amount from the longer stick and discard those pieces. There is only one stick left, , so discard that stick. The number of sticks at each iteration are .

// Function Description

// Complete the cutTheSticks function in the editor below. It should return an array of integers representing the number of sticks before each cut operation is performed.

// cutTheSticks has the following parameter(s):

// int arr[n]: the lengths of each stick
// Returns

// int[]: the number of sticks after each iteration
// Input Format

// The first line contains a single integer , the size of .
// The next line contains  space-separated integers, each an , where each value represents the length of the  stick.