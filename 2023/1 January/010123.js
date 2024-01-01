function timeConversion(s) {
    let twelveConvert = Number.parseFloat(s[0]+s[1])
    let twelvePlus = (twelveConvert + 12).toString()
    // console.log("outer")
    // console.log(s[s.length-2])
    if (s[s.length-2] == 'P'){
        // console.log("pm")
        if (s.startsWith("12")){
            return s.substr(0,8)
        } else {
            let shortString = s.substring(2)
            // console.log(shortString)
            return twelvePlus + shortString.substr(0,6)
        }
    } else if (s[s.length-2] == 'A'){
        // console.log("am")
        if (s.startsWith("12")){
            let shortString = s.substring(2)
            return "00" + shortString.substr(0,6)
        }
        return s.substr(0,8)
    }
}

console.log(timeConversion("01:05:45AM"))
// timeConversion("07:05:45PM")

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid