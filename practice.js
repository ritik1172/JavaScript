//! Array creation
// let arr = [1, 2, "Hello"];

// //!Array access
// console.log(arr[2]);
// console.log(arr);
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// //!array update
// let arr = [1, 2, "Hello"];
// arr[4] = 100;
// console.log(arr);

//? slice
// let arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(0, 2));

// //splice --> modifies original array
// arr.splice(3, 2, 60, 80);
// console.log(arr);

//? pop & push

// arr.push(100);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.forEach((val) => {
//     console.log(val + 5);
// })

// let arr = [10, 20, 30, 40];
// let newArr = arr.reduce((acc, val) => {
//     return acc + val;
// })
// console.log(newArr);


let arr = [23, 43, 12, 25, 17]; //add 5 && filter out only even number && add all of them
let newArr = arr.map((val) => val + 5)
.filter((val) => val % 2==0)
.reduce((acc, val) => acc + val);

console.log(newArr);




