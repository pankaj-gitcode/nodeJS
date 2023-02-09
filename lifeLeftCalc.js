// assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

var readlineSync = require("readline-sync");

//ask current age & how many years wanted to live

var currentAge = readlineSync.questionInt("Enter your current age:\n");
var totalYears = readlineSync.questionInt("Enter your total predicted year:\n");

//function to return the years left

function lifeLeft(age, predictYear){

  var yearsLeft = predictYear - age;
  var monthLeft = yearsLeft * 12;
  var daysLeft = yearsLeft * 365;
  var weeksLeft = yearsLeft * 52;

  return "you've only " + yearsLeft + " years, " + monthLeft + " months, " + weeksLeft + " weeks and " + daysLeft + " days left.";
  
}
//calling lifeLeft function 1st time
console.log(lifeLeft(currentAge, totalYears));

//while loop if user wanted to predict more
var endAsk = false;

while (endAsk != true ){
  //ask choice
  var choice = readlineSync.question("\nWant more prediction[yes/no]?\n").toLowerCase();

  if (choice === "yes"){

    var predictedYear = readlineSync.questionInt("Enter predicted year you want to live:\n");
    
    console.log(lifeLeft(currentAge, predictedYear));
  }
  if (choice === "no"){
    console.log("Thank you for using LifeLeft calculator!");
    endAsk = true;
  }
}