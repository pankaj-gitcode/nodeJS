const person = {
  greet: function(msg){
    console.log(`${msg} ${this.name} `)
  }
}
const person1 = {name: 'oook'};
 person.greet.call(person1, 'hi')
//-------------apply() -------------------------
//syntax: functionName.apply(thisArg, [argsList])

const db = {
  name: 'db1',
  greet: function(msg){
    console.log(`${msg} this is: ${this.name}, skill is: ${this.skill}`)
  }
}
const person2={
  name: 'Raj',
  skill: 'JS'
}
// db.greet.apply(person2, ['hello', 'hi'])
//-------------apply() -------------------------

const data = {
  name: 'data1',
  info: function(...args){
    console.log(`${args[1]} thisss ${args}is ${this.name}, skill is: ${this.skill}`)
  }
}
// data.info.apply(person2, ['hi','hello','jar'])
//-------------apply() -------------------------
const info= (...msg)=>{
  console.log(`Hello ${this.name}, skills are: ${msg[2]}`)
}
const details = {name: 'Mac'}
// info.apply(details, ['c', 'c++', 'JS'])



function userName(...args){
  this.username = args;
  
}

function createUser(username, email, password){
  userName.apply(this,[username]);

  this.email = email;
  this.password = password;
}

console.log(createUser('Raj', 'mail@mail.com', 'abc123'));
const uname = new createUser('jon', 'mail', 'abc123');
console.log(uname);
//-------------apply() -------------------------
//...............................................................
//-------------bind() -------------------------
const pInfo1={
  fName: 'john',
  lName: 'Doe',
  display: function(){
    console.log(`Hi ${this.fName} ${this.lName}`)
  }
}
setTimeout(pInfo1.display, 2000)
   //setTimeout uses callback as one of argument, when pInfo1.display is provided as callback the result is undefined!
   // when funtion pInfo.display() is used as callBack 'this' is lost, as we checked delay time from 3000 to 0 ms and result is 'Undefined' menas 'this' is lost
  //and so "bind" comes into the picture that'll solve this issue and 'this' will not lost 

//-------------bind() -------------------------

const bindUsed = pInfo1.display.bind(pInfo1)
setTimeout(bindUsed, 3000)
//-------------bind() -------------------------











