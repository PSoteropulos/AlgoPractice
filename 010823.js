const migratoryBirds = (arr) => {
    let typeOneCount = 0;
    let typeTwoCount = 0;
    let typeThreeCount = 0;
    let typeFourCount = 0;
    let typeFiveCount = 0;
    for (let i=0;i<arr.length;i++){
        if (arr[i] == 1){
            typeOneCount ++
        }
        else if (arr[i] == 2){
            typeTwoCount ++
        }
        else if (arr[i] == 3){
            typeThreeCount ++
        }
        else if (arr[i] == 4){
            typeFourCount ++
        }
        else if (arr[i] == 5){
            typeFiveCount ++
        }
    }
    if (typeOneCount >= typeTwoCount && typeOneCount >=typeThreeCount && typeOneCount >=typeFourCount && typeOneCount >=typeFiveCount){
        return 1
    }
    else if (typeTwoCount > typeOneCount && typeTwoCount >= typeThreeCount && typeTwoCount >= typeFourCount && typeTwoCount >= typeFiveCount){
        return 2
    }
    else if (typeThreeCount > typeOneCount && typeThreeCount > typeTwoCount && typeThreeCount >= typeFourCount && typeThreeCount >= typeFiveCount){
        return 3
    }
    else if (typeFourCount > typeOneCount && typeFourCount > typeTwoCount && typeFourCount > typeThreeCount && typeFourCount >= typeFiveCount){
        return 4
    }
    else if (typeFiveCount > typeOneCount && typeFiveCount > typeTwoCount && typeFiveCount > typeThreeCount && typeFiveCount > typeFourCount){
        return 5
    }
    // let totalArray = [typeOneCount, typeTwoCount, typeThreeCount, typeFourCount, typeFiveCount];
    // let sortedTotalArray = totalArray.sort(function(a, b){return b-a})
    // return sortedTotalArray
}

// console.log(migratoryBirds([1,1,2,2,3]))
// console.log(migratoryBirds([1,4,4,4,5,3]))
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))


// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

// Example

// There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type .

// Function Description

// Complete the migratoryBirds function in the editor below.

// migratoryBirds has the following parameter(s):

// int arr[n]: the types of birds sighted
// Returns

// int: the lowest type id of the most frequently sighted birds
// Input Format

// The first line contains an integer, , the size of .
// The second line describes  as  space-separated integers, each a type number of the bird sighted.