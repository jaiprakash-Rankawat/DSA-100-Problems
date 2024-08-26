// Q10. FizzBuzz problem
// 1. print numbers from 1 to n
// 2. if number is divisible by 3, print "Fizz"
// 3. if number is divisible by 5, print "Buzz"
// 4. If number is divisible by 3 and 5, print "FizzBuzz"
// 5. else, print the number

function FizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
FizzBuzz(15);
