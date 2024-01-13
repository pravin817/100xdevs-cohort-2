// ************************************* Assignment *******************************

// 1) Create a counter in JS that count down from 30 to 0

function counter(start, end) {
  for (let i = start; i >= end; i--) {
    console.log(i);
  }
}

// counter(30, 0);

// 2. Calculate the time it taken between a setTimeout call and the inner function is actually executed

function calCulateTime() {
  let startTime = new Date();

  setTimeout(() => {
    let endTime = new Date();
    let difference = endTime - startTime;
    console.log(difference);
  }, 1000);
}

calCulateTime();
// 3. Create the terminal clock (HH:MM:SS)

function clock() {
  setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    console.log(`${hour}: ${minute}: ${second}`);
  }, 1000);
}

// clock();
