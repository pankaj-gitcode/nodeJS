const boxIds = ['id1','id2','id3'];
const boxFunc = ()=>{
  return boxIds.map((elem)=>{
  const inputBox = document.createElement('input');
    inputBox.setAttribute('id', elem);
    inputBox.setAttribute('maxlength', 2)
    document.body.appendChild(inputBox)
  })
  
}
const box = boxFunc()
console.log(box)

const eventListener = (id)=>{
  // elemId = document.getElementById(`${id}`);
  document.getElementById(`${id}`).addEventListener('onchange', ()=>elemId.focus())
}

const boxElem = ()=>{
  const maxlength = 2; 
  const value1 = document.getElementById(`${boxIds[0]}`).value
  const value2 = document.getElementById(`${boxIds[1]}`).value
  const value3 = document.getElementById(`${boxIds[2]}`).value

  const elemId1 = document.getElementById('id1');
  const elemId2 = document.getElementById('id2');
  const elemId3 = document.getElementById('id3');

  // elemId1.focus();
  if(value1.length < 2){
    elemId1.focus()
    elemId1.addEventListener('onkeyup', ()=>{
      if(value2.length < 2){
        console.log("val: ",value1)
        return elemId2.focus()}
    })
    }
  
}



boxElem()
