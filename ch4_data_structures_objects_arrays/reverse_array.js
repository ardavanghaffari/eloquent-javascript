function reverseArray(array) {
  let reverse = [];
  for (let i = array.length - 1; i >= 0; i--) reverse.push(array[i]);
  return reverse;
}

function reverseArrayInPlace(array) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    [array[i], array[j]] = [array[j], array[i]];
    i++;
    j--;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
