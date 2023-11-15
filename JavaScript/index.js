console.log("Hello Who Are You");

//alert("Welcome Ramesh ")

// comments "//" "shift+command+/"Multiple Comments"

document.write("ACPT")
document.write("<br>")
document.write("<h1>Hello</h1>")
document.write("<button>Click</button>")
document.write("<br>")
document.write("<br>")
document.write("ACPT")

const x = 10;
const y = 10;
const z = x+y;

const name = "Ramesh";
console.log("how are you "+ z);
console.log(name)

const bl = true;
console.log(bl);
//Arrays------------------------------------------------

const arr = ["ramesh","kaushika","de","silva",25,31];

for(let i=0; i<arr.length; i++){
console.log(arr[i]);
}

//------------------------------------------------------

// --------------- Let / var / const --------------

//let

let l =10;
//con not re declared 
//let l = 12; 
//But re can re designd 

l = 20;

//Block 

{
let ll = 30;
}

//can not out of scope print variable 
//console.log(ll);

//----------------------------------------------------

//var 

//can we do three: types 

var v = 11;
var v = 12;
//can redeclared

v = 13;
//can resigned

{var ka = "text"}
console.log(ka);
//can out of scope

//----------------------------------------------------

//const

//can not do this 3 types

const con = 5;
//const con = 10;
// can not re dclared

//con = 15;
//con not re assign 

//{const con = "Hello"};
//console.log(con);
//can not out of scope

const a = 100;
const b = 33;

const modular = a%b;
console.log(modular);
//FUNCTION--------------------------------------------
function myName() {

            console.log("Hello Baby");


}

myName();
//Arrow FUNCTION--------------------------------------
const myclass = () => {

    console.log("Hello Baby Too");

}

myclass();

function myName1(n1,n2,n3,n4) {

    console.log(n1);
    console.log(n2);
    console.log(n3);
    console.log(n4);

}

myName1("ramesh","kaushika","de","silva");
myName1("ramesh","kaushika","de","silva");

function numberEqual(x,y){

console.log(x+y)

}

numberEqual(12,34)

 let i=0;

 while(i<10){

 console.log(arr);
 
 
 i++
 }

 //Object 

 const person = {

            name : "Ramesh",
            address : "Panadura",
            id : "98274239V",
            age : "25",
            run : function(){ console.log("Palayan Yanna")},
            eat: function(){console.log("run")},
            sing: function(){console.log("sing")},
 }

 const name1 = person.name
 console.log(name1);

 person.run();
 person.eat();
 person.sing();

 //Arrays

 const arraysNext = [45,"Hello",true,person];

 console.log(arraysNext[3]);
 arraysNext[3].run();

 const fruits = ["Banana","Orange","Apple","Mango"];

 const fruit = fruits.pop();
 console.log(fruits);
 console.log(fruit);

 fruits.push("Rabutan");
 console.log(fruits);

 const shiftFruit = fruits.shift();
 console.log(fruits);
 console.log(shiftFruit);

 fruits.unshift("Rabutan");
 console.log(fruits);

 function clickMe (){

        console.log("hello");

 }


