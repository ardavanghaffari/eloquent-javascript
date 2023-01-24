// load dependencies
require("./code/load")("code/scripts.js", "code/chapter/05_higher_order.js");

function dominantDirection(text) {
  return countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none")
    .reduce((d1, d2) => d1.count > d2.count ? d1 : d2).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
