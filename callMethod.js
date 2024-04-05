
const person={
  fullName: function(){
    console.log(this.firstName + " " + this.age);
  }
}
const person1 = {
  firstName: 'Raj',
  age: 21
}
const person2 = {
  firstName: 'Om',
  age: 31
}
person.fullName.call(person1)
//...................................
function func1(...args){
  console.log(`this is ${this.firstName} age is ${this.age}`)};
func1.call(person2)

//..............................
const area = (h,w)=>{console.log(`h*w = ${h*w}`)}
const areaObj = {h:2, w:5};
area.call(areaObj, areaObj.h,areaObj.w)
area.call(areaObj.h, areaObj.w,3)

//..............................
function greet(msg,...args){console.log(`${msg} this is ${this.name}`)}

const info = {name: 'Raj'};

const john = {name: 'mac'}
greet.call(john,"hi", 'java')




//********************************************************
//object contains a function
const car = {
  brand: 'Toyota',
  color: 'red',
  year: 2010,
  displayDetails : function(){return()=>{
    console.log(`This is ${this.color} ${this.brand} car from ${this.year}`);
  }}
};

//object
const bike = {
  brand: 'Honda'
}
// console.log(car.displayDetails()())
//.call()
//********************************************************
