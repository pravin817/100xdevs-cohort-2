// Callbacks

function square(n) {
    console.log("square called");
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function quad(n) {
  return n * n * n * n;
}

/*

    function sumOfSquares(a, b) {
    let square1 = square(a);
    let square2 = square(b);
    return square1 + square2;z
    }

    function sumOfCubes(a, b) {
        let cube1 = cube(a);
        let cube2 = cube(b);
        return cube1 + cube2;
    }


    function sumofQuads(a,b){
        let quad1 = quad(a);
        let quad2 = quad(b);
        return quad1 + quad2;
    }

*/
// We are repeating the same code again and again---> Not following DRY principle
// We can use HOF to solve this problem

function sumOfSomething(a,b,fn){
    let val1 = fn(a);
    let val2 = fn(b);

    return val1+val2;
}


/*

    let ans = sumOfSquares(1, 2);
    console.log(ans);

    ans = sumOfCubes(1, 2);
    console.log(ans);

*/
ans = sumOfSomething(1,2,44);
console.log(ans);

// ans = sumOfSomething(1,2,cube);
// console.log(ans);

// ans = sumOfSomething(1,2,quad);
// console.log(ans);