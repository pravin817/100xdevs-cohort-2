// function findSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum = sum + i;
//   }

//   return sum;
// }

// const result = findSum(100);
// console.log(result);

// // call back functions

// function square(n) {
//   return n * n;
// }

// function cube(n) {
//   return n * n * n;
// }

// function sumOfSquare(a, b) {
//   let x = square(a);
//   let y = square(b);

//   return x + y;
// }

// function sumOfCubes(a, b) {
//   let val1 = cube(a);
//   let val2 = cube(b);

//   return val1 + val2;
// }

// console.log(sumOfCubes(2, 3));
// console.log(sumOfSquare(2, 3));

// Callback Function

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function doSomething(a, b, fn) {
  let val1 = fn(a);
  let val2 = fn(b);

  return val1 + val2;
}

console.log(doSomething(2, 3, square));


// This is the ananomous function
console.log(doSomething(2, 3, function (n){
    return n*n*n;
}));
