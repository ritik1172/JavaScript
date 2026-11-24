
//Function --> it is a block of code that is used to perform a task

// function add(a, b){    //! with parameter
//     console.log(a+b);
// }
// add(10, 20);
// add(30, 40);

// function test(){    //! without parameter
//     console.log("This is a function");
// }
// test();

// function add(a, b){   //! With Return Keyword
//     return a + b;
// }
// console.log(add(10, 20));
// var res = add(10, 20);
// console.log(res);

//? Return Keyword --> to pass one function's value to another function

// function add(a, b){
//     return a+b;
// }
// function show(res){
//     console.log(res);
// }
// show(add(10, 20)); //show(30);


//? Arrow Function --> easy syntax
var add = (a, b) => a + b; 
console.log(add(20, 30));