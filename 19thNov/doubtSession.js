// function display(){
//     console.log("This is display fn")
// }
// function fun(name, fn){
//     console.log(`hi, my name is ${name}`)
//     fn()
// }
// fun("riya",display);// display is callback function, fun higher order function
// // the function it self go as parameter is called callback function

// console.log("----------------------------")
// function display(){
//     console.log("This is display fn")
// }
// function display2(){
//     console.log("This is display 2")
// }
// function fun(name, fn){
//     console.log(`hi, my name is ${name}`)
//     //fn()
//     display() // not a CDF , it is nested FN, it is hardcoded
// }
// fun("riya",display2);

// console.log("----------------------------")

// getOrder(5500, payByPhonePe,"1" )

// function payByPhonePe(cardAmount){
//     console.log(`cardAmount is paid through Phonepe`)
//     //console.log(`${cardAmount} is paid by phonePe`);
//     let balance = 5000
//     if(cardAmount<=balance){
//         console.log(`Insufficient Balance`)
//         return false
//     }
//     else{
//         console.log(`${cardAmount} is paid through PjonePe`)
//     }
//     return true
// }
// function payByPaytm(cardAmount){
//     console.log(`cardAmount is paid through Paytm`)
//     let balance = 5000
//     if(cardAmount<=balance){
//         console.log(`Insufficient Balance`)
//         return false
//     }
//     //console.log(`${cardAmount} is paid by Paytm`);
//     return true
// }
// function payByDebitCard(cardAmount){
//     let balance = 5000
//     if(cardAmount<=balance){
//         console.log(`Insufficient Balance`)
//         return false
//     }
//     console.log(`${cardAmount} is paid by Debit card`);
//     return true
// }
// function getOrder(cardAmount,payingFn, customerNumber){
//     let paymentStatus = payingFn()
//     if(paymentStatus==true){
//         console.log(`${customerNumber}, Order Placed`);
//     }
//     else{
//         console.log(`${customerNumber}, Order Failed`)
//     }
// }


// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.map((el,index)=>{
//     return el*2
// }
//)
// console.log(newArr)

// let arr = [1, 2, 3, 4, 5]
// let double = (el)=>{
//     return el*2
// }
// let newArr = arr.map(double)
// console.log(newArr)

//ES6

let arr = [1,2,3,4,5];
let [one ,two, three, four] = [11,12,13];
console.log(one);

// let [username ,email, password] = ["riya", "riyanka@gamil.com", "riya890"];
// console.log(username);
// console.log(email);

// let userdetails = [1,2,3,"riya", "riyanka@gamil.com", "riya890"];
// let [,,,username ,email, password] = userdetails;
// console.log(username);
// console.log(email);

//object destructuring
let obj = {
    name : "riya",
    email: "riyanka@gmail.com",
    location:{
        city: "hyd"
    },
    subjects:["html","css","js"]
}
let {name,email} = obj;
let {subjects}=obj;
console.log(subjects)