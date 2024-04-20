// console.log(inputBox)
// inputOne.focus();
// inputTwo.focus();

// grab the input boxes element
const inputBox = document.querySelector('#inputElm')
const inputOne = document.querySelector('#inp1')
const inputTwo = document.querySelector('#inp2')

console.log('attribute-1:',inputOne.getAttribute('maxlength'))

//define inputs functions and invoke focus() handler function
  const inputOneFunc = ()=>{
    const inputValue = inputOne.value;
    console.log("InputOne:", inputValue.length);
    inputHandler()
    // return inputValue;
  }
 const inputTwoFunc = ()=>{
   const inputValue = inputTwo.value;
   console.log(`Input_Two: ${inputValue}`)
   inputHandler(); //invoking handler function
 }

const inputHandler = ()=>{

  //move focus to other input boxes, if user entered value length >= maxlength defined for each input boxes
  if(inputOne.value.length < inputOne.getAttribute('maxlength')){
    console.log("InputValue:", inputOne.value)
    inputOne.focus();
  }
  else if (inputTwo.value.length < inputTwo.getAttribute('maxlength')){
    console.log('inputTwo Value:', inputTwo.value)
    inputTwo.focus();
  }
  // else if(inputTwo.value.length >= inputTwo.getAttribute('maxlength'))
  else {return inputBox.focus()}

}
