function deepEqual(v1, v2) {
  if (v1 !== null && typeof(v1) == "object" &&
      v2 !== null && typeof(v2) == "object") {
    let keys = [...new Set((Object.keys(v1).concat( Object.keys(v2))))];

    for (let k of keys) {
      return deepEqual(v1[k], v2[k]);
    }
  } else return v1 === v2;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(1, 1));
// → true
console.log(deepEqual(null, null));
// → true
console.log(deepEqual(undefined, undefined));
// → true
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(null, undefined));
// → false
console.log(deepEqual(obj, null));
// → false
console.log(deepEqual(obj, undefined));
// → false
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false

/*

The author's solution performs better. Most cases are handled by the first line:

  if (a === b) return true;

Only non-null objects that don't have the same 'identity' (different physical
bits in memory) go through the deep comparison. Even non-null objects with the
same 'identity' are handled by === (in the first line).

This is while we perform the non-null object test for all cases and objects
with the same identity go through the deep comparison. Which is not needed.

function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

*/
