// map, reduce and arrow functions

/*
    // Arrow Function
    // The simple function
    // function sum(a, b) {
    //   return a + b;
    // }

    // The arrow function
    const sum = (a, b) => {
    return a + b;
    };
    // console.log(sum(12, 10));
*/

/*
    // The map function
    // Problem Statement : Given an array, give me back a new array in which every value is multiplied by 2.

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let newArr = [];

    // The simple solution
    for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
    }

    // Other solution

    // function transform(i){
    //     return i*2;
    // }

    // const ans = arr.map(transform);
    // console.log(ans);

    // The more used syntax

    const ans = arr.map((item) => {
    return item * 2;
    });
    // arr.map((item) => {
    //   newArr.push(item * 2);
    // });

    console.log("The original array : ", arr);
    console.log("The new array : ", ans);
*/

/*
    // The filter function
    // Problem Statement : Given an input array , give me back all the even values from it.

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // The basic solution
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        newArr.push(arr[i]);
    }
    }

    // The solution by using the filter
    let ans2 = arr.filter((item) => {
    return item % 2 == 0;
    });

    console.log("The original Array : ", arr);
    console.log("The filtered array : ", newArr);
    console.log("The filtered array using filter : ", ans2);

*/

/*
    // Assignment : Create a map function that takes an array and a transform function input and returns the transformed array as input.
    const input = ["pravin", "Sagar", "raj", "SANDIP"];

    // Apply the input
    let output = input.map((item) => {
    return item.toLocaleUpperCase();
    });

    console.log(`The original array : ${input}`);
    console.log(`The array after transformation : ${output}`);
*/
