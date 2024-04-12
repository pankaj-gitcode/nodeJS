//define debounce function
const debounce= (func, delay)=>{
  let timeoutID; //previously set timeoutID
  return function(...args){
    //clear timeout ID if any
    clearTimeout(timeoutID);
    let currentEC = this; //current execution context

    //set time delay and call func
    timeoutID = setTimeout(()=>{
      func.apply(currentEC, args)  //called func in current EC
    }, delay)
  }
}

//grab the input element
const inputElement = document.getElementById('inputElm');


//fetch API data
const fetchDataFromAPI = ()=>{
  const enteredValue = inputElement.value; //grab the user's input
  fetch(`https://api.github.com/users/${enteredValue}`)
  .then(response=>response.json())
  .then((data)=>{console.log("DATAA:", data);updateUI(data)})  //pass API to UI function
}

//add event listener to inputElement and callback func as debounce
// inputElement.addEventListener('click', debounce(fetchDataFromAPI, 300));

//adding listener to button:
document.getElementById('btn').addEventListener('click', debounce(fetchDataFromAPI, 1000))

//UI function
const updateUI = (data)=>{
  const paraElem = document.getElementById('p');
  paraElem.innerText =JSON.stringify(data);
}
