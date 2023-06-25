const buyChoco = (prices, money) => {
    prices.sort((a,b)=>a-b)
    console.log(prices)
    for (let i=0;i<prices.length-1;i++){
        for (let j=i+1;j<prices.length;j++){
            if (prices[i] + prices[j] <= money){
                money = money - prices[i] - prices[j]
                return money
            }
        }
    }
    return money
};




console.log(buyChoco([1,2,2], 3))
console.log(buyChoco([3,2,3], 3))
console.log(buyChoco([98,54,6,34,66,63,52,39], 62))
console.log(buyChoco([69,91,78,19,40,13], 94))





// 2706. Buy Two Chocolates
// Easy
// 173
// 5
// Companies
// You are given an integer array prices representing the prices of various chocolates in a store. You are also given a single integer money, which represents your initial amount of money.

// You must buy exactly two chocolates in such a way that you still have some non-negative leftover money. You would like to minimize the sum of the prices of the two chocolates you buy.

// Return the amount of money you will have leftover after buying the two chocolates. If there is no way for you to buy two chocolates without ending up in debt, return money. Note that the leftover must be non-negative.

 

// Example 1:

// Input: prices = [1,2,2], money = 3
// Output: 0
// Explanation: Purchase the chocolates priced at 1 and 2 units respectively. You will have 3 - 3 = 0 units of money afterwards. Thus, we return 0.
// Example 2:

// Input: prices = [3,2,3], money = 3
// Output: 3
// Explanation: You cannot buy 2 chocolates without going in debt, so we return 3.
 

// Constraints:

// 2 <= prices.length <= 50
// 1 <= prices[i] <= 100
// 1 <= money <= 100
// Accepted
// 28.4K
// Submissions
// 43.5K
// Acceptance Rate
// 65.1%