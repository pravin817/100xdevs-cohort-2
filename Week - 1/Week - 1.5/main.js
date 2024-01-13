/*
 function findSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}
function syncSleep(){
    let sum = 0;
    for(let i = 0; i < 1e9; i++){
        sum += i;
    }

    console.log(sum);
}

function findSumTill100(){
    console.log(findSum(100));
}

syncSleep();
// findSumTill100();
setTimeout(findSumTill100,1000);
console.log("Hello World")
*/

// Read the data from the file

/*
        const fs = require("fs");

        fs.readFile("hello.txt", "utf-8", function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
        });

        console.log("Hello there !!!!");

        let cnt = 0;

        for(let i = 0;i<10000000000;i++){
            cnt+=i;
        }

        console.log(cnt);

        console.log("Hello there 2")

*/

/*

//  How the actual call stack work

        console.log("Hello There 1");

        function sayHello(name) {
        console.log(`Good Morning, ${name}`);
        }

        setTimeout(()=>sayHello("Pravin"), 2000);
        setTimeout(()=>sayHello("Sagar"), 1000);

        // do something

        let cnt = 0;
        for (let i = 0; i <= 123456789; i++) {
        cnt += i;
        }

        console.log("The value of cnt : "+cnt);

        console.log("Hello there 2");

*/

/*
        function square(n){
            return n*n;
        }

        function cube(n){
            return n*n*n;
        }


        function sumOfSomething(a,b,fn){
            const val1 = fn(a);
            const val2 = fn(b);

            return val1+val2;
        }

        console.log(sumOfSomething(2,3,square));
        console.log(sumOfSomething(2, 3, cube));

*/

// const fs = require("fs");

// function pravinReadFile(cb){
//     fs.readFile("hello.txt","utf-8",function(err,data){
//         cb(data);
//     });
// }

// function onDone(data){
//     console.log(data);
// }

// pravinReadFile(onDone);

// Now how it will be done in efficient way

/*
        const fs = require("fs");

        function pravinReadFilePromise() {
        return new Promise(function (resolve, reject) {
            fs.readFile("hello.txt", "utf-8", function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
            });
        });
        }

        pravinReadFilePromise()
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log("Error while reading data from file : ", err);
        });

  */

let p = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello there");
  }, 2000);
});
console.log(p); // Pending state


// Resolve the promise
p.then(() => {
  console.log("Hello there");
});

