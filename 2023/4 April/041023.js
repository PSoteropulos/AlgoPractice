const squareIsWhite = (coordinates) => {
    let whiteCords = ["b1", "d1", "f1", "h1", "b3", "d3", "f3", "h3", "b5", "d5", "f5", "h5", "b7", "d7", "f7", "h7", "a2", "c2", "e2", "g2", "a4", "c4", "e4", "g4", "a6", "c6", "e6", "g6", "a8", "c8", "e8", "g8", ]
    return (whiteCords.includes(coordinates))
};




console.log(squareIsWhite("a1"))
console.log(squareIsWhite("h3"))
console.log(squareIsWhite("c7"))



// 1812. Determine Color of a Chessboard Square
// Easy
// 645
// 15
// Companies
// You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.



// Return true if the square is white, and false if the square is black.

// The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

 

// Example 1:

// Input: coordinates = "a1"
// Output: false
// Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.
// Example 2:

// Input: coordinates = "h3"
// Output: true
// Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.
// Example 3:

// Input: coordinates = "c7"
// Output: false
 

// Constraints:

// coordinates.length == 2
// 'a' <= coordinates[0] <= 'h'
// '1' <= coordinates[1] <= '8'
// Accepted
// 56.9K
// Submissions
// 73.1K
// Acceptance Rate
// 77.8%