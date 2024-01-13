/*

    const fs = require("fs");

    // async function ReadFilePromise() {
    console.log("Before the Reading File");
    fs.readFile("a.txt", "utf-8", function (err, data) {
    if (data) {
        console.log("The data from readFile : ",data);
    } else {
        console.log(err);
    }
    });

    console.log("After the Reading File");


    // ReadFileSync

    const data = fs.readFileSync("a.txt", "utf-8");
    if(data){
        console.log("The data from readFileSync : ",data);
    }

    console.log("After the Reading File");

*/

// Create the promisified function for the addition of the two numbers.

function sum(a, b) {
  return a + b;
}

// Not good ways for the sum.
function sum(a, b) {
  return new Promise(function (resolve, reject) {
    resolve(a + b);
  });
}

sum(2, 3).then(function (data) {
  console.log(data);
});



