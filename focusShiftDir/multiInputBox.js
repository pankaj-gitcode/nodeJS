//itext, para, btn
const inputElem = document.getElementById('itext');
inputElem.setAttribute('class', 'inputBox');
const inputBoxElem = document.getElementsByClassName('inputBox');

const inputIds = ['id1','id2', 'id3'];
inputIds.map((elem)=>  {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('id', elem);
  document.body.appendChild(inputElement).focus()
})
