//! Array creation
// let arr = [1, 2, "Hello"];

// //!Array access
// console.log(arr[2]);
// console.log(arr);
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// //!array update
// arr[0] = 100;
// console.log(arr);

//? slice
// let arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(1, 3));

//? splice --> modifies original array
// let arr = [10, 20, 30, 40, 50];
// arr.splice(2, 2, 80, 90);
// console.log(arr);

//? push() & pop()
// let arr = [10, 20, 30, 40, 50];
// arr.push(90); //add element at the last index
// arr.pop(); //remove element from the last
// console.log(arr);


//? map --> perform any operation to each and every element of an array and it will return a new array.

//forEach --> perform any operation to each and every element of an array and it will not return a new array.

// let arr = [10, 20, 30, 40, 50];
let newArr = arr.map((val) => {
    return val + 5;
});
console.log(newArr)

// let arr = [10, 20, 30, 40, 50];
// arr.forEach((val) => {
//     console.log(val + 5);
// });

//filter --> filter out elements based on specific condition
// let arr = [10, 20, 30, 40, 50];
// let newArr = arr.filter((ele) => {
//     return ele > 30;
// })
// console.log(newArr);


//reduce --> reduce an array to a single value
// let arr = [10, 20, 30, 40, 50];
// let newArr = arr.reduce((acc, val) => {
//      return acc + val;
// })
// console.log(newArr);


// let arr = [1, 2, 3, 4, 5, 6];
//let newArr = arr.filter((num) => num %2 ==0)
// .map((num) => num + 3)
// .reduce((acc, num) => acc + num);

// console.log(newArr);


