// Array Chunk
// Example 👉 chunk([1,2,3,4,5,6,7,8],3) Output [[1,2,3],[4,5,6],[7,8]]

function chunk(array, value) {
  let newArray = [];
  let num;
  let k = 0;
  if (array.length % value == 0) {
    num = Math.floor(array.length / value);
  } else {
    num = Math.floor(array.length / value) + 1;
  }
  for (let j = 0; j < num; j++) {
    newArray[j] = [];
    for (let i = 0; i < value; i++) {
      newArray[j][i] = array[k];
      k++;
      if (k == array.length) {
        break;
      }
    }
  }
  return newArray;
}
console.log(chunk([1, 2, 3, 4, 5], 1));
