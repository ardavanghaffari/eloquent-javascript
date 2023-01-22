for (let i = 1; i <= 100; i++) {
  let output;
  if (i % 15 == 0) {
    output = 'FizzBuzz'
  } else if (i % 5 == 0) {
    output = 'Buzz'
  } else if (i % 3 == 0) {
    output = 'Fizz'
  } else {
    output = i
  }
  console.log(output);
}

/*

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

*/
