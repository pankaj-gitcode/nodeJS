const { KeyObject } = require("crypto");

let arr = new Array(6);
// console.log(arr, typeof arr)

arr = [2,1]
// console.log(arr) 

const pName = {
  name: 'raj',
  greet: function func(){
    return ()=>{
      console.log(`OBJECT: ${this}`);
      console.log(`Hi ${this.name}`)
      return this.name

    }
  }
}

// console.log(pName.greet()())
// console.log(pName.greet().bind({ name: 'John' })());
// console.log(Object.keys({ pName })[0]);
// console.log(typeof this)

const entries = Object.entries(pName);
console.log(entries);

console.log(Object.entries(this))

// console.log(Object.entries(pName).find((Key)Key,value=>key==='pName'))

function func(){
  const obj = {
    name: 'jac',
    add: function (){
      console.log(`THIS IS: ${this.name}`)
    }
  }
  return obj.add()
}
console.log(func())

// In Node.js environment, 'window' is undefined as it is a browser-specific global object.
// In Node.js, 'global' is used as a replacement for 'window' in the browser environment.

// console.log(global)
const obj2 = {name: 'RAJ', city: 'GOA'}
console.log(global.obj2)
// if(!global.hasOwnProperty("obj2")){
    console.log("obj2 is not a property of global");
    console.log("obj2=", obj2);
// }
console.log(this.obj2)
    // if(!this.hasOwnProperty("obj2")){
    //     console.log("obj2 is not attached to 'this'");
    // } else {
    //     console.log("obj2 is attached to 'this'");
    // }
    console.log(`'obj2' is stored in the 'global' variable. You can access it using 'global.obj2' or simply 'obj2' if it's a global object.`);

// console.log(Object.entries(obj2).find(([key,value])=>key==='name'))

// global.hasOwnProperty('obj2')? console.log(true):console.log(false)

console.log(Object.keys(global))
global.temp = obj2;
console.log(global.hasOwnProperty('temp'))

global.hasOwnProperty('temp')?true:false
