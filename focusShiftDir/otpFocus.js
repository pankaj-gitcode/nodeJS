const boxFunc = ()=>{
  const inputIds = ['id1', 'id2', 'id3'];

  return inputIds.map((elem)=>{
    const inputBox = document.createElement('input');
    inputBox.setAttribute('id', elem);
    inputBox.setAttribute('maxlength', 2)
    document.body.appendChild(inputBox);
  })
}

const box = boxFunc()
console.log(box)
