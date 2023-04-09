
// create an array of jokes:
let jokesArry = [`Why did the tomato turn red<br> Because it saw the salad dressing<br>`,
`Why did the scarecrow win an award<br> Because he was outstanding in his field<br>`,
`Why did the bicycle fall over<br> Because it was two-tired<br>`,
`What do you call an alligator in a vest<br> An investigator<br>`,
`What did the grape say when it got stepped on<br> Nothing, it just let out a little whine<br>`,
`Why did the chicken cross the playground<br> To get to the other slide<br>`,
`What do you call a fake noodle<br> An impasta<br>`,
`Why did the math book look so sad<br> Because it had too many problems<br>`,
`Why don't scientists trust atoms<br> Because they make up everything<br>`,
`Why did the coffee file a police report<br> It got mugged`]

//select random joke
let jokeNum = Math.floor(Math.random() * jokesArry.length);
let randJoke = jokesArry[jokeNum];

//get the HTML content of element div:
let divElem = document.getElementById("para").innerHTML;

//merge the random joke to DOM
document.getElementById("para").innerHTML = randJoke;
