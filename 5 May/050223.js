const minDeletionSize = (strs) => {
    let count = 0
    // console.log(strs[0].length)
    for (let i=0; i<strs[0].length;i++){
        let column = ""
        // console.log(i)
        for (let j=0; j<strs.length;j++){
            // console.log(i, j)
            // console.log(strs[j])
            column += strs[j][i]
        }
        // console.log(column)
        if (column !== column.split("").sort().join("")){
            count ++
        }
    }
    return count
};


// apparently you can compare string letters with > or <


console.log(minDeletionSize(["abc", "bce", "cae"]))
console.log(minDeletionSize(["cba","daf","ghi"]))
console.log(minDeletionSize(["a","b"]))
console.log(minDeletionSize(["zyx","wvu","tsr"]))
console.log(minDeletionSize(["rrjk","furt","guzm"]))




// 944. Delete Columns to Make Sorted
// Easy
// 1.6K
// 2.8K
// Companies
// You are given an array of n strings strs, all of the same length.

// The strings can be arranged such that there is one on each line, making a grid.

// For example, strs = ["abc", "bce", "cae"] can be arranged as follows:
// abc
// bce
// cae
// You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted, while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

// Return the number of columns that you will delete.

 

// Example 1:

// Input: strs = ["cba","daf","ghi"]
// Output: 1
// Explanation: The grid looks as follows:
//   cba
//   daf
//   ghi
// Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.
// Example 2:

// Input: strs = ["a","b"]
// Output: 0
// Explanation: The grid looks as follows:
//   a
//   b
// Column 0 is the only column and is sorted, so you will not delete any columns.
// Example 3:

// Input: strs = ["zyx","wvu","tsr"]
// Output: 3
// Explanation: The grid looks as follows:
//   zyx
//   wvu
//   tsr
// All 3 columns are not sorted, so you will delete all 3.
 

// Constraints:

// n == strs.length
// 1 <= n <= 100
// 1 <= strs[i].length <= 1000
// strs[i] consists of lowercase English letters.
// Accepted
// 171.1K
// Submissions
// 228.8K
// Acceptance Rate
// 74.8%