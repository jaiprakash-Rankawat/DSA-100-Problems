// Q11. Find maximum profit ?
// suppose 👉 [9,1,4,8,3,2] price at day 1 is 9 , day 2 is 1 and so on.
// you buy at ruppes 1 and sell it on 8 ruppes so you got max profit of 7 rs.

function maxProfit(priceArray) {
  let minPrice = priceArray[0];
  let maxPrice = 0;
  for (let i = 0; i < priceArray.length; i++) {
    let currentPrice = priceArray[i];
    minPrice = Math.min(minPrice, currentPrice);
    let potenialPrice = currentPrice - minPrice;
    maxPrice = Math.max(maxPrice, potenialPrice);
  }
  return `Maximum profit is ${profit}`;
}
console.log(maxProfit([9, 1, 4, 8, 3, 2]));
