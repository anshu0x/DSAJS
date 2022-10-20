let fac = 5;

// factorial
//  5 * 4 * 3 * 2 * 1
// iterative method
// let temp = 1;
for (let i = fac; i > 0; i--) {
  // temp *= i;
}
// console.log(temp);
//  direct recursion
function fact(n) {
  if (n == 1) {
    return n;
  } else {
    return fact(n - 1) * n;
  }
}

// console.log(fact(5));

//  Indirect recursion
function buyapple() {
  //  condition
  buybanana();
}

function buybanana() {
  //  condition
  buyapple();
}

// buyapple();

//  head and tail recursion

//  output will be opposite in head and tail recursion

//  reverse array with recusrion

let data = [6, 1, 4, 42, 34, 12];
let temp;

// inbuilt function in js
// data.reverse()

function customReverse(data, start, end) {
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    customReverse(data, start + 1, end - 1);
  }
}

customReverse(data, 0, data.length - 1);
console.log(data);
