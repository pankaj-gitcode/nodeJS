const boxIds = ['id1','id2','id3'];

const boxFunc = ()=>{
  boxIds.map((elem)=>{
  const inputBox = document.createElement('input');
    inputBox.setAttribute('id', elem)
    inputBox.setAttribute('placeholder', 'Enter Num')
    inputBox.setAttribute('maxlength', 2)
    document.body.appendChild(inputBox)
  })
}

boxFunc()
//inputBoxes
const inputBox1 = document.querySelector('#id1');
const inputBox2 = document.querySelector('#id2');
const inputBox3 = document.querySelector('#id3');
console.log(inputBox1, inputBox2, inputBox3);

inputBox1.focus();
const inputFn1 = ()=>{
  const inputVal1 = inputBox1.value;
  inputHandler();
}
const inputFn2 = ()=>{
  const inputVal2 = inputBox2.value;
  inputHandler();
}

const inputFn3 = ()=>{
  const inputVal3 = inputBox3.value;
  inputHandler();
}

const inputHandler = ()=>{
  if(inputBox1.value.length < 2){
    inputBox1.focus();
    inputFn2()
  }
  else if(inputBox2.value.length < 2){
    inputBox2.focus()
    inputFn3()
  }
  else if(inputBox3.value.length < 2){
    inputBox3.focus();
  }
  else{
     
  }
}

//adding functions
inputBox1.addEventListener('keyup', inputFn1);
inputBox2.addEventListener('keyup', inputFn2);
inputBox3.addEventListener('keyup', inputFn3);
