//Normal Function -- declaration
// function sum(a,b){
//     return a+b;
// }

// Normal Fn expression, Hosting Rules for const is applied
const sum1 = function(a,b){
    returna+b
}

// Arrow function which is expression, long hand
let sum = (a,b)=>{
    if(a%2 === 0)
    {
        a = a+5
    }
    return a+b;
}

// Arrow fn shorthand --> elminated {} and return keyword, use whenever you don't have multiple lines of calculation.
const sum2 = (a,b)=> a+b

// const obj = {
//   value: 42,
//   regularMethod: function() {
//     console.log(this.value); // Works: 42
//   },
//   arrowMethod: () => {
//     console.log(this.value); // Undefined because `this` is not bound to `obj`
//   }
// };
// obj.regularMethod();
// obj.arrowMethod();

// Ternary Operator
const age = 18;
const eligibility = age >= 18 ? 'Eligible to vote' : ' Not eligible'
console.log(eligibility);

// spread operator --> Array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// spread operator --> object
let obj = {name: "riya", age: 21};
let obj2 = {age: 22, location: "bihar"};
let obj3 = {...obj,...obj2}
console.log(obj3);

let todo = {title: "learn spread operator", status: false};

// want to update the todo
//todo = {...todo, status: true}
todo = {status: true, ...todo}
console.log(todo)

// function(a, b, c, d){
//     return a+b+c+d;
// }

// rest operator
function sum5(name, ...a){
    console.log("a from rest parameter", a)
    
    let sum = 0;
    for(let i = 0; i < a.length; a++){
        sum +=a[i]
    }
    console.log(`Hi My name is ${name} and sumis ${sum}`)
    console.log(sum);
}
sum5("riya", 1, 2, 3, 4, 5, 6, 7, 8, 9);
