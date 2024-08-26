// Q7. check whether given string is palindrome or not ?
function palindrome(string) {
  let reverse = string.split("").reverse().join("");
  if (reverse == string) {
    console.log(`${string} is palindrome`);
  } else {
    console.log(`${string} is not palindrome`);
  }
}

palindrome("12321");
