const designerPdfViewer = (h, word) => {
    const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let wordIndexArray = []
    let maxHeight = 0
    // console.log(alphabetArray.length)
    // console.log(alphabetArray.indexOf('z'))
    for (let i=0;i<word.length;i++){
        wordIndexArray.push(alphabetArray.indexOf(word[i]))
    }
    // console.log(wordIndexArray)
    // console.log(h[1])
    for (let i=0; i <word.length;i++){
        // console.log(h[wordIndexArray[i]])
        if(h[wordIndexArray[i]]>maxHeight){
            maxHeight = h[wordIndexArray[i]]
        }
    }
    // console.log(maxHeight)
    return maxHeight * word.length
}

console.log(designerPdfViewer([1,3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5, 5], 'abc'))
// console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba'))




// When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently. For example:

// PDF-highighting.png

// There is a list of  character heights aligned by index to their letters. For example, 'a' is at index  and 'z' is at index . There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in  assuming all letters are  wide.

// Example
 

// The heights are  and . The tallest letter is  high and there are  letters. The hightlighted area will be  so the answer is .

// Function Description

// Complete the designerPdfViewer function in the editor below.

// designerPdfViewer has the following parameter(s):

// int h[26]: the heights of each letter
// string word: a string
// Returns

// int: the size of the highlighted area
// Input Format

// The first line contains  space-separated integers describing the respective heights of each consecutive lowercase English letter, ascii[a-z].
// The second line contains a single word consisting of lowercase English alphabetic letters.