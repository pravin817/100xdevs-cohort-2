// console.log("hello world")
// console.log(a);

// const a = 1;
// // a = 2
// console.log(a);

// let name = "Pravin";
// let age = 20;
// let isMarried = false;

// console.log("Name : " + name + " Age : " + age);

// if(isMarried == true){
//     console.log(name +" is married");
// }else{
//     console.log(name + " is not married");
// }

// let ans = 0;
// let num = 100;

// for(let i = 1;i<=num;i++){
//     ans = ans + i;
// }
// console.log(ans);

// Arrays

// let personArray = ["Pravin","Sagar","Tushar","Ravindra"];

// console.log(personArray);
// console.log(personArray[0]);
// console.log(personArray[1]);
// console.log(personArray[2]);

// Write a program for priniting the even numbers from the array.

// let nums = [1,2,3,4,,5,6,,7,8,9,10];

// for(let i = 0;i<nums.length;i++){
//     if(nums[i]%2 == 0){
//         console.log(nums[i]);
//     }
// }

// Write a program for the printing the maximum number from the array.

// let nums = [1,2,3,4,5,63456,7,8,9,10];
// let max = nums[0];

// for(let i = 0;i<nums.length;i++){
//     if(nums[i]> max){
//         max = nums[i];
//     }
// }

// console.log("The maximum number is : " + max);

// *************************************** OBJECT ************************************

// let personArray = ["Pravin","Sagar","ABC"];
// let genderArray = ["male","male","female"];

// for(let i = 0;i<personArray.length;i++){
//     if(genderArray[i] == 'male'){
//         console.log(personArray[i]);
//     }
// }

// const user1 = {
//     name:"Pravin",
//     gender:"male"
// }

// console.log(user1.name);
// console.log(user1["gender"]);

const allUser = [
  {
    name: "pravin",
    gender: "male",
  },
  {
    name: "Sagar",
    gender: "male",
  },
  {
    name: "Priya",
    gender: "female",
  },
];

// print the name whose gender is male

let personCount = allUser.length;

for (let i = 0; i < personCount; i++) {
  if (allUser[i]["gender"] == "male") {
    console.log(allUser[i]["name"]);
  }
}


// Write a program to reverse the elements from the array

// let arr = [1,2,3,4,5,6,7];

// let i = 0;
// let j = arr.length-1;

// while(i<j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;

//     i++;
//     j--;
// }

// console.log(arr)
