// console.log("Hello, World!");
// var n = 90
// var n = 8
// console.log(n)

// var n = 9;
// if(n>8){
//   n = 89;
// }
// console.log(n)

// let N = 9;
// if(N >= 8){
  
// }
// console.log(N)


//   if(true){
//     var n =8
//   }
//   console.log(n)
  
  // console.log(n)
  // let n = 90


// if(true){
//     let v = 90;
// }
// console.log(v)

// const b = 90;
// b = 89;

// Template Literals
//`backtick`
const m = `hyyyyy
hhhhhhhhhh
hhhhhhhhh`;
console.log(m);

// log - function
// console - class 
// string interpolation(Embedding variables inside strings)

function tagg(strings, ...values){ // not give triple dots then output not gets correct
    console.log(strings);
    console.log(values);
}
const n = "ani";
const  age = 20 ;
tagg`my name is ${n} and age is ${age} years`;

// Arrow Functions(ES6) - shorter and modern way to write functions in javascript.
// ()=>{}
// // Think of arrow function is mini function.
// Traditional way
// function display(a,b){
//     return a+b;
// }
// console.log(display(7,9));

const display=(a,b) =>{
     return a+b;
}
console.log(display(8,90));

// arrow function without parameter and return
// arrow function with parameter without return
// arrow function with parameter and return
// arrow function without parameter with return

//arrow function with one parameter (no brackets needed)
const square = y=>{
    return y*y
}
console.log(square(3)); // function call

const squaree = (y)=>{
    return y*y
}
console.log(squaree(3)); // function call
//() paranthesis function
// bracket width
//{} 

// no parameter
const squares = ()=>{
    y = 8
    return y*y
}
console.log(squares()); // function call

// no return keyword needed
const add = (a,b)=>a+b
console.log(add(7,9));

//Arrow Function & This
// Arrow functions do not have their own this.
// const student = {
//     name : "ani",
//     show(){

//     }
// }

const N = [7,8,9,10];
const d = N.map(N=>N*N);
console.log(d)

//unary operator single
//binary two operand
//ternary 3 condition condition?valueifTrue:valueifFalse



//Avoiding Nested Ternary:
//let grade = marks>90?"A":marks>75?"b":"c"

//destructuring
// const c =[99,88,77,66];
// const [o,t,th,f]=c;
// console.log(o);
// console.log(t)

const c =[99,88,77,66];
const [o,,,f]=c;
console.log(o);
console.log(f) //skiping the items

//default valuse
const e =["mumbai"]
const [c1,c2="usa"]=e;
console.log(c1);
console.log(c2);

//Nested Destructuring


//function parameter destructuring


//spread & Rest Operators in JavaScript
// Object Destructuring
// const person = {
//   name: "Amit",
//   age: 19,
//   city: "Delhi"
// };

// const { name, age, city } = person;

// console.log(name); // Amit
// console.log(age);  // 19
// console.log(city); // Delhi

//Nested Destructuring
// const student = {
//   name: "Reena",
//   marks: {
//     maths: 90,
//     science: 88
//   }
// };

// const { marks: { maths, science } } = student;

// console.log(maths);   // 90
// console.log(science); // 88



// Function Parameter Destructuring

// function display({ name, age }) 
// {
//   console.log(name);
//   console.log(age);
// }

// const person = { name: "Asha", age: 22 };
// display(person);


// const numbers = [1, 2, 3];
// console.log(...numbers);   


// Basic Use of ?. for Safe Property Access 

// const student = {
//   name: "Ani",
//   marks: {
//     math: 95,
//     science: 88
//   }
// };

// console.log(student?.marks?.math);  
// // 95