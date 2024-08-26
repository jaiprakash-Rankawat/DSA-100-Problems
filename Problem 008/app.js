// Q8. write a function to reverse a number ?

function reverse(number) {
  let strNum = number.toString().split("").reverse().join("");
  return parseInt(strNum) * Math.sign(number);
}
let number = reverse(-12345);
console.log(number); //54321
console.log(typeof number); // type is number
