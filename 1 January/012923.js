const marsExploration = (s) => {
    let altered = 0
    for (let i=0;i<s.length;i+=3){
        if (s[i] != "S"){
            altered ++
        }
    }
    for (let j=2;j<s.length;j+=3){
        if (s[j] != "S"){
            altered ++
        }
    }
    for (let h=1;h<s.length;h+=3){
        if (s[h] != "O"){
            altered ++
        }
    }
    return altered
}


console.log(marsExploration("SOSTOT"))
console.log(marsExploration("SOSSPSSQSSOR"))
console.log(marsExploration("SOSSOT"))
console.log(marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS"))




// A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.

// NASA_Mars_Rover.jpg

// Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine how many letters of the SOS message have been changed by radiation.

// Example


// The original message was SOSSOS. Two of the message's characters were changed in transit.

// Function Description

// Complete the marsExploration function in the editor below.

// marsExploration has the following parameter(s):

// string s: the string as received on Earth
// Returns

// int: the number of letters changed during transmission
// Input Format

// There is one line of input: a single string, .

// Constraints

//  will contain only uppercase English letters, ascii[A-Z].