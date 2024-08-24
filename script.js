let add = ((a,b) => a+b);

let subtract = ((a,b) => a-b);

let multiply = ((a,b) => a * b);

let divide = ((a,b) => a/b);

let firstNum;
let operator;
let secondNum;


function operate(operator, firstNum, secondNum){
    switch(operator){
        case 'add':
            display.textContent = add(firstNum,secondNum);
            break;

        case 'subtract':
            display.textContent = subtract(firstNum,secondNum);
            break;

        case 'multiply':
            display.textContent = multiply(firstNum,secondNum);
            break;

        case 'divide':
            display.textContent = divide(firstNum,secondNum);
            break;
    }
    

}

const container = document.querySelector(".container");
const inputs = document.querySelector(".inputs");
const buttons = document.querySelector(".buttons");

const num9 = document.querySelector('#num9');
const num8 = document.querySelector("#num8");
const num7 = document.querySelector("#num7");
const num6 = document.querySelector("#num6");
const num5 = document.querySelector("#num5");
const num4 = document.querySelector("#num4");
const num3 = document.querySelector("#num3");
const num2 = document.querySelector("#num2");
const num1 = document.querySelector("#num1");
const num0 = document.querySelector("#num0");
const clear = document.querySelector("#clear");
let display = document.querySelector(".display");


num9.onclick = () => display.textContent += 9;
num8.onclick = () => display.textContent += 8;
num7.onclick = () => display.textContent += 7;
num6.onclick = () => display.textContent += 6;
num5.onclick = () => display.textContent += 5;
num4.onclick = () => display.textContent += 4;
num3.onclick = () => display.textContent += 3;
num2.onclick = () => display.textContent += 2;
num1.onclick = () => display.textContent += 1;
num0.onclick = () => display.textContent += 0;
clear.onclick = () => {
    input1 = undefined;
    input2 = undefined;
    display.textContent = undefined;
}
const addition = document.querySelector('#add');
const subtraction = document.querySelector('#subtract');
const division = document.querySelector('#divide');
const multiplication = document.querySelector('#multiply');
const calculate = document.querySelector('#equals');

let input1;
let input2;
let typeOfCalculation;

addition.addEventListener("click", () =>{
    if(typeof input1 == "undefined"){
        input1 = display.textContent;
    }else{
        input2 = display.textContent;
    }
    console.log(input1);
    console.log(input2);
    display.textContent = "";
    typeOfCalculation = "add";
})

subtraction.addEventListener("click", () =>{
    if(typeof input1 == "undefined"){
        input1 = display.textContent;
    }else{
        input2 = display.textContent;
    }
    console.log(input1);
    console.log(input2);
    display.textContent = "";
    typeOfCalculation = "subtract";

})

division.addEventListener("click", () =>{
    if(typeof input1 == "undefined"){
        input1 = display.textContent;
    }else{
        input2 = display.textContent;
    }
    console.log(input1);
    console.log(input2);
    display.textContent = "";
    typeOfCalculation = "divide";

})


multiplication.addEventListener("click", () =>{
    if(typeof input1 == "undefined"){
        input1 = display.textContent;
    }else{
        input2 = display.textContent;
    }
    console.log(input1);
    console.log(input2);
    display.textContent = "";
    typeOfCalculation = "multiply";

})


calculate.addEventListener("click", () =>{
    input2 = display.textContent;
    input1 = Number(input1);
    input2 = Number(input2);
    console.log(typeof input2);
    console.log(typeOfCalculation);
    if(input2 > 0){
        operate(typeOfCalculation,input1,input2);
    } else{
        display.textContent = 'Nice try diddy.';
    }
    
})