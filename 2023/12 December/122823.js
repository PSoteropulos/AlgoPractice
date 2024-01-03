const longestPalindrome = (s) => {
    const occurrences = new Map() //init new map to track occurrence counts
    for (let i = 0; i < s.length; i++){ // iterate over string to set occurrence counts
        occurrences.set(s[i], (occurrences.get(s[i]) || 0) + 1) // set the value to 0 if key:value isnt in map yet, then increment either way
    }
    let total = 0 // init variable to store length of palindrome
    let hasOdd = false // flag to check for odd character count (since this requires subtraction of 1 to make even)
    for (let count of occurrences.values()){ //iterate through map values
        if (count % 2 === 0) { // if even, add it to total length
            total += count
        } 
        else {
            hasOdd = true // else set the odd flag, and add the length -1 to palindrome (chars must be pairs except for possibly one char in center)
            total += count - 1
        }
    }
    return hasOdd ? total + 1 : total // add 1 for the center letter if any odd count (since it will be center/pivot point)
};






console.log(longestPalindrome("abccccdd"))
console.log(longestPalindrome("a"))
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"))








// 409. Longest Palindrome
// Easy
// Topics
// Companies
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.