// write func takes array and reverses

const reverseArray = (arr) => {
    return arr.reverse()
}


const reverseArrayLong = (arr) => {
    let newArray = []
    for (let i=arr.length-1; i>=0; i--){
        console.log(arr[i])
        newArray.push(arr[i])
    }
    return newArray
}

console.log(reverseArrayLong([1,2,3,4,5]))