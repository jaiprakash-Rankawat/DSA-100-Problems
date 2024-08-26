// Q9. function to convert first charcater of a word to capital letter
function capitalize(sentance) {
  let string = sentance
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return string;
}
console.log(capitalize("JAI prakash rankawat"));
