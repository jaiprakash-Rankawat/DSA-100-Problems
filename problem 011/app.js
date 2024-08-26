var isPalindrome = function (s) {
  let string = s.replace(/[^a-zA-Z]/g, "");
  let str1 = string.toLowerCase().split("").reverse().join("");
  let str2 = string.toLowerCase().split("").join("");
  console.log(str1);
  console.log(str2);

  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

console.log(Math.pow(2, 5));
