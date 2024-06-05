const inputBoxIds = ["id1", "id2", "id3"];
const maxLength = 2;

//creating 3 boxes
const inputBoxes = () => {
  inputBoxIds.map((inputId) => {
    const inputBox = document.createElement("input");
    inputBox.setAttribute("id", inputId);
    inputBox.setAttribute("maxlength", maxLength);
    document.body.appendChild(inputBox);
  });
};
inputBoxes();

//new inputBoxes
const inputBox1 = document.getElementById("id1");
const inputBox2 = document.getElementById("id2");
const inputBox3 = document.getElementById("id3");

//boxes function invokes input Handler
const inputBoxFn1 = () => inputHandler();
const inputBoxFn2 = () => inputHandler();
const inputBoxFn3 = () => inputHandler();

//create focus on 1st box
inputBox1.focus();

//inputHandler to shift focus()
const inputHandler = () => {
  if (inputBox1.value.length < 2) {
    inputBox1.focus();
  } else if (inputBox2.value.length < maxLength) {
    inputBox2.focus();
  } else if (inputBox3.value.length < maxLength) {
    inputBox3.focus();
  } else {
    const newPara = document.createElement("p");
    document.body.appendChild(newPara);
    newPara.innerText = "OTP Entered!!";
  }
};

//add eventListener to each new input boxes
inputBox1.addEventListener("input", inputBoxFn1);
inputBox2.addEventListener("input", inputBoxFn2);
inputBox3.addEventListener("input", inputBoxFn3);

//random number- OTP
const otp = () => {
  let upperCase = [];
  let lowerCase = [];
  let num = [];
  let OTP = [];
  let OTPNum = [];
  let OTPNumConcat = [];

  for (let i = 0; i < 91; i++) {
    if (i >= 65 && i <= 90) {
      const capsLetr = String.fromCharCode(i);
      const smallLetr = String.fromCharCode(i).toLowerCase();
      upperCase.push(capsLetr);
      lowerCase.push(smallLetr);
      OTP.push(capsLetr);
      OTP.push(smallLetr);
    } else if (i >= 0 && i <= 10) {
      const numbers = i;
      num.push(i);
      OTP.push(i);
    }
  }

  for (let i = 0; i < 6; i++) {
    const OTPIndex = Math.floor(Math.random() * 63);
    OTPNum.push(OTP[OTPIndex]);
  }
  console.log([upperCase, lowerCase, num]);

  //concatinating the OTP digits
  for (let i = 0; i < OTPNum.length; i++) {
    if (i % 2 === 0) {
      OTPNumConcat.push([i] + OTPNum[i + 1]);
    }
  }

  return OTP, OTPNumConcat;
};
const OTP = otp();
console.log(OTP);

// display OTP
const para = document.createElement("h1");
para.innerText = OTP;
document.body.appendChild(para);


//create an OTP check button
const button = document.createElement("button");
button.innerText = 'CheckOTP'
document.body.appendChild(button);


const clickForOTP = () => {
  inputBoxIds.map((id) => {

    const para = document.createElement('p');
    document.body.appendChild(para)

    document.getElementById(`${id}`).value === OTP[inputBoxIds.indexOf(id)]? para.innerText=`✔️Matched:${document.getElementById(`${id}`).value}`:para.innerText=`❗Not Matched: ${document.getElementById(`${id}`).value}`
    
    document.getElementById(`${id}`).value === OTP[inputBoxIds.indexOf(id)]
      ? console.log(`Matched:${OTP[inputBoxIds.indexOf(id)]}`)
      : console.log(`not Matched: ${document.getElementById(`${id}`).value}!!`);
  });
};

button.addEventListener("click", clickForOTP);
