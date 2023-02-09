var readlineSync = require("readline-sync");

//take empty array to store Fibonacci numbers
var emptyList = [];

// ask length of fibonacci series
var askLength = readlineSync.questionInt("Enter length of Fibonacci series?\n");


// function fibonacci()
function fibonacci(numLen){

  for (var i=0; i < numLen; i++) {
    
    if (i === 0 || i === 1){  
      //item on index 0 should be 0 and item on index 1 should be 1
      emptyList[0] = 0;
      emptyList[1] = 1;
    }
      
    else{
      // item on index 2 = item on index 1 + item on index 0
      emptyList[i] = emptyList[i-1] + emptyList[i-2];
    }
  }
  return emptyList;
}

//calling 1st fabonacci function
console.log(fibonacci(askLength));

// while loop to obtain more Fibonacci
var endFab = false;

while (endFab != true){
  var askChoice = readlineSync.question("\nWant more series[yes/no]?\n");

  if (askChoice.toLowerCase() === "yes"){
    var askNum = readlineSync.question("\nEnter Fibonacci length:\n");
    console.log("Fibonacci series is:\n" + fibonacci(askNum));
  }
  if (askChoice.toLowerCase() === "no") {
    console.log("Completed!");
    endFab = true;
  }
}


