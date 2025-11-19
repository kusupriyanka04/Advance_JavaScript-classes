//const n1 = [6,7,8,9];
//console.log(n1);
// for(let i = 0; i < n1.length; i++){
//     console.log(n1[i])
// }
// using spread operator in Array
//console.log(...n1)

// function fun(a,b,c){
//     console.log(a+b+c);
// }

// const num = [1,2,3];
// fun(...num);

// Default parameter 
// function greet(n = "priyanka"){ // default value
//    console.log("my name is "+n);
// }
// greet("moulika");

//callback Function

// function gree(){
//     display();
// }
// function display(){
//     console.log("hi")
// }
// gree();


//  function display(){
//     console.log("hello i am callback fun")
//  }
//  function show(n,m){
//     let a = m+n;
//     console.log(a)
//     console.log("bye");
//  }
//  function funn(callback){
//     callback(9,7);
//  }
//  funn(show);
//  funn(display);


//  function fun(n){
//    console.log("my name is "+n);
//  }
//  function print(n){
//     n("mni")
//  }
//  print(fun);

 //Higher-Order Function
//  function fun(n){
//    console.log("my name is "+n);
//  }
//  function print(n){
//     n("mni")
//  }
//  print(fun); //print is higher-order function

 //map()

 let n = [7,6,5,4,3,8,9]
//  for(let i = 0; i < n.length; i++){
//     if(n[i]>5){
//         console.log(n[i]);
//     }
//  }

 let r = n.map(num=>num>5?num:0);
 console.log(r);

 //forEach()
 let v = ["ani", "mini", "soni"];
 v.forEach(function(i){
    console.log(i);
 })

 //filter()
 let f = [8,9,5,6,3,7];
 let m = f.filter(function(i){
    return i>5;
 })
 console.log(m);

 // reduce-combine all values together-->return one 
 //let f = [8,9,5,6,3,7];
 let s = f.reduce(function(t,n){
    return t+n;
 });
 console.log(s)

//  let s = f.reduce((t,n)=> t+n);
//  console.log(s)

// let g = [ 82,67,90,4,23,56];
// let l = g.reduce((big,n)=>n>big?n:big);
// console.log(l)

let g = [ 82,67,90,4,23,56];
g.sort((a,b)=>b-a);
console.log(g);