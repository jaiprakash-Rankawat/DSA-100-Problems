// Q3. function to find unique pair of two dice and total number of unique pair
function diceUniquePair() {
  let count = 0;
  for (let i = 1; i <= 6; i++) {
    for (let j = i; j <= 6; j++) {
      console.log(i, j);
      count++;
    }
  }
  console.log(`There are ${count} unique pair`);
}
diceUniquePair();
