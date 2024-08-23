let add = ((a,b) => a+b);

let subtract = ((a,b) => a-b);

let multiply = ((a,b) => a * b);

let divide = ((a,b) => a/b);

let firstNum;
let operator;
let secondNum;


function operate(operator, firstNum, secondNum){
    return operator(firstNum,secondNum);
}
