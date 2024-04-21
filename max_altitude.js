const funcRetCheck = (arr)=>{
  let sum = 0;
  let res;
  for(let i=0; i<arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

console.log(funcRetCheck([1,2,3,4,5]))
