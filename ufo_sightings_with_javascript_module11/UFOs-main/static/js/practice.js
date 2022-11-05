function addition(a,b) {
    return a + b;
}
console.log(addition(4,5));

// Arrow function
let addition = (a,b) => a+b;
console.log(addition(7,10));

// Functions can call other functions
function doubleAddition(c,d) {
    var total = addition(c,d)*2;
    return total;
}
console.log(doubleAddition(6,7));

// Arrow function
doubleAddition = (c,d) => addition(c,d)*2;


// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }

// Arrow function 
printHello = () => "Hello there!"; 

// Iterate through a loop;
function listLoop(userList){
    for (var i=0; i < userList.length; i++) {
        console.log(userList[0]);
    }
}
var userList = ["Mahin", "baba", "Homa", "Ahmad"];

//----------------------------------------------------------
var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

// Arrow function


//----------------------------------------------------------
for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }

// Loop through  the forEach function
let number = [ 1,2,3,4,5,6];
number.forEach(function(element) {
    console.log(element**2);
})