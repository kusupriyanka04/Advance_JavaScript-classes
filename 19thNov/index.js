// SCOPE

// fun();
// fun2();
// let x = 10; // global scope
// function fun(){
//   let x = 9;  // local to the function
//   console.log(x);
// }
// function fun2(){
//   let x = 8;  // local scope //shadowing
//   console.log(x);
// }

// console.log(x);


// function scope

// function deep(){
//     let n = 9;
//     console.log(n);
// }
// //console.log(n);
// deep();

// var p = 9;
// if(p>7){
//     console.log(p); // 9
// }


// if(p>7){
//     var p = 9;
//     console.log(p); // 9
// }

// if(p>7){
//     let p = 9;
//     console.log(p); //ReferenceError: p is not defined
// }

// if(true){
//    let p = 9;
//     console.log(p);  // 9
// }
//console.log(p);  // ReferenceError: p is not defined

// console.log(a);
// var a = 90;  // undefine

// hoisting backprocess
//  var a;
// console.log(a); // 90
// var a = 90; 

// console.log(y);
// let y = 10;  //ReferenceError: Cannot access 'y' before initialization


// lexical environment
// let z = 99;
// function fun1(){
//     let x = 9;

//     function fun2(){
//         let y = 90;
//         console.log(x+y+z)
//     }
//     //console.log(x+y+z)
//     fun2()
// }

// fun1();

// let z = 99;
// function fun1(){
//     let x = 9;

//     function fun2(){
//         var y = 90;
//        console.log(x+y+z)
//     }
//     //console.log(x+y+z)
//     fun2()
// }

// fun1();

// clousere
// a function defined inside of another function.
// inner function has access to the variable and scope of the outer function.
// allow for private variable and state maintainance.

// function outer(){
//     let msg = "hello"
//     function inner(){
//         console.log(msg);
//     }
//     inner();
// }

// outer();

// let count = 0;
// function increment(){
//     //let count = 0;
//     count++;
//     console.log(`count increased to ${count}`);
// }

// increment();
// increment();
// increment();
// increment();
// increment();


// function createCounter(){
//     let count = 0;
// function increment(){
//     //let count = 0;
//     count++;
//     console.log(`count increased to ${count}`);
// }
//    return {increment};
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();

// object are created by the concept of 

function createGame(){
  let score = 0;
function incrScore(points){
  score += points;
  console.log(`+${points}pts`)
}
function decScore(points){
   score -= points;
  console.log(`-${points}pts`)
}
function getScore(){
    return score
}
 return {incrScore, decScore, getScore};
}

const game = createGame();
game.incrScore(5);
game.incrScore(6);
game.decScore(4);
console.log(` the final score is ${game.getScore()} pts`)
