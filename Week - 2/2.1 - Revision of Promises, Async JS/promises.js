// There are two ways to create the promise.
// 1. Wraaping another asynchrounus function.

/*
    function myOwnSetTimeout(fn, duration){
        setTimeout(fn,duration);
    }


    // How to call the above function

    console.log("Hi there 1")
    myOwnSetTimeout(function(){
        console.log("2 seconds have passed");
    },2000);

    console.log("Hi There 2")

*/

// 2. By using the promise.

/*
    function myOwnSetTimeout(duration){
        let p = new Promise(function(resolve,reject){
            
            setTimeout(resolve,duration);
        });

        return p;
    }

    // How to handle the promise.

    let ans = myOwnSetTimeout(2000);

    console.log(ans);

    ans.then((function(){
        console.log("2 seconds have passed");
    }));

*/

// How to handle the error

function handlePromiseError() {
  let p = new Promise(function (resolve, reject) {

    let err = false;
    if(err){
        reject("Something went wrong");
    }else{
        resolve("Everything is fine");
    }
  });

  return p;
}

handlePromiseError()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log({ Message: error });
  }).finally(()=>{
    console.log("This is the block that will excute irrespective of the error or success");
  })
