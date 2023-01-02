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