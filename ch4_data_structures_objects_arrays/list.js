function arrayToList(array) {
  if (array.length == 0) return null;
  return {value: array[0], rest: arrayToList(array.slice(1))};
}

function listToArray(list) {
  let output = [];
  while (list != null) {
    output.push(list["value"]);
    list = list["rest"];
  }
  return output;
}

function prepend(element, list) {
  return {value: element, rest: list};
}

function nth(list, number) {
  if (number == 0) return list["value"];
  return nth(list["rest"], number - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

/*

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

*/
