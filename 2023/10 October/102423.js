const countCharacters = (words, chars) => {
    let count = 0
    for (let i=0; i<words.length; i++){
        console.log(words[i])
        let copy = chars.split("")
        let allGood = true
        for (let j=0; j<words[i].length; j++){
            if (copy.includes(words[i][j])){
                copy.splice(copy.indexOf(words[i][j]), 1)
            }
            else {
                allGood = false
            }
        }
        if (allGood) {
            count += words[i].length
        }
    }
    return count
};






console.log(countCharacters(words = ["cat","bt","hat","tree"], chars = "atach"))
console.log(countCharacters(words = ["hello","world","leetcode"], chars = "welldonehoneyr"))
console.log(countCharacters(words = ["pxlqovnbsgvqjzpfeidchzrodnbqfrccfydzjptukscjuatlsrcurepllxzyghhdepitqptlmfkhzxjgswaulxkfydhkilg","uqklvqnlhdkwryjawkqfajfpbcnhglxlwxlaskxlytr","jvgkxcdkxrvfahjkvhmfuyjzxtyxrsogbtsjybeaxugqymcr","rgxditmosplnqvodtis","jm","ruqjwejuanjtiizcmbieobesnjnadzqvqumggblzmkxilgfarnxwpcawtkzxlvugibpidvwtikloeziuxqoi","wxeyzrnbhlhwxecrgejsrawyulynvgtszwqqlihkcvckgcgtgpyqtkuwvjywmhpskaiwmpyarftqhnogxpith","vdpbykqlihtpvfnqbrcjpggojqbalerohyitktuikbffvfatcnneuvbanjihiaorrjcdthntnrxebfhvshmpodmzhtwnasbm","wgjstkoaojcesfdrllugmojwdmgeejyiqvshlowtktddattunarnohgvqsoskfmbrami","ecwqxbawirvnxvsjybbebclaturorlcbpf","gtjbaigvufrotlwfoqqolnjabnvtbcygtfcytinzpcjbvprdkdjawrcbthmxjrabimhhs","cvzlbrvppkyxtjxzeglzwoagmpjnfxddbwolxmwdohgtfktgftzzkwpianslkpldyfzubtjczse","neaw","mxhmvkajofnmdiiduactlemcvpztscmsnrdhuhquxnnzywsrzxyplgbppiypxwcfbsnyzblaeifo","krekecabfpufucjhqphjnibaeqdvdpmrfougdwugvoioqangdnxromwlxnfeydaneyazzclscqgdxlhhgnoqmslfflzqv","klutvchxsceihfmzitgqakytesfjykribjhjzdruuoycjkwaghmmqkfrhkrtawudtjyjwqbyspamlegqjlwlj","raykfkflqdzrpthdejetwolgciygwaktulkxemkdbbllkjxhnnafsms","os","xhchkcetmlprcdmrnalvkvgabxxnomphqpqhnddqhecogspbdebeoshvjgzvmqu","jqtdysnpskktynxwmsfaabglagnqcllptvuyyqjwrmqaftenusmsahhhqubkwxltpr","sulmwluiwvlroldpiyecaicwrawzwflokefqkdwmxejaovvpbflfdtviinbvvtlhhhefmgfsqs","sxyhcckvyl","vsaacsybcddxvuzkddjmuivsvtjyanpbydmkcwnkmxvsiantgkvkmqjysclsvd","sxcghypulvmfqfunxj","pozekufhlooosxpcggbi","xzaoxzllcixfqbupqozmzrnugj","j","tgslwp","ntrdkixexajlpjgmcbrqimwtqnzfrqjszeiuvrgzclerzmsnagzaxbredvlrmipzflrzusclckmxphc","ifdflsywdfizpodsehrrifsvejcxarrxmxyjgbbvqyqvywncphzfmnxhybxpdcozfnzablfx","uluhplzrsaehaqxfnbcmixueedevhirbwqdyztwaxnkogcauymxgcpabxekib","agtfkinbdccoemxetbryzpluzlpyzicnfopphrxriqm","pdympxpwvxwcqaxrvbvyqkrresrjgzgxuyfxtkgldtathokdbyfsqfmitmiyagtqgijaiazvsumeyutbbwxqdshquzrehn","rqe","sljsvenhhstnnngzqyo","dezrzpgldeimxfoqajuhjctgvalwkhkjemjaxumxqmifglbizusuqlttxirpbqbuvauwy","dkwpyezbmkcskoxxcgrxcewknqgdckjxfyzcmzqcbyeucxbqybxoldogtkmdknsrruvnlfqnpfx","sjeftmjkuperfynbreycwhuoyqybticswblbrrpugzhlrmiedjqufnehevzqwtaebwvdswsz","lolnfyliloqmhjmhhohdtgfajjfdjqpubslbsrwitbjmrcegdrdjzvonxaefdvdfcbqmaaks","qhcoaiocjhuzywkirlblajgeapzajqsoa","sxrmoqxqbtakuqwmrrkljmegbwbeqbywmlyuprwyhljzejbybxoumidpxdrohwdjoqycpxcmivaulnqzneydwqfsvcxgyyseuk","yrowy","dohrzkrzdjehpctnjrvhzojullsiucrhphshwxwicyzkvzbqrztic","rmshnxtbhsdgkiijrmwulocdzjzpgfyimkjdthuzkhoqgkeawgwincubrloknocxwzgqqcxafksxgzh","aymovnuhptozhkiyowbeguzlkmrwjnujgjbdne","abc","vxoigovwmqizmkwbkktqk","uokwktdempzloaglvvkqstztmwzcmhgxtoua","bzwjxqueazlzfojrkbqmhtwrvuwsnfcnylurnddpektekca","qgndjgvzcyajhgmrrnhdywwdbmkhtthwcfiueuxfldanyrmccwcy"], chars ="figspbov"))







// 1160. Find Words That Can Be Formed by Characters
// Easy
// Topics
// Companies
// Hint
// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

 

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

// Constraints:

// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// words[i] and chars consist of lowercase English letters.
// Accepted
// 155.3K
// Submissions
// 231.3K
// Acceptance Rate
// 67.1%