const numbers = document.querySelectorAll(".number");
const calcScreen =  document.querySelector(".calc-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");


let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0'

const inputNumber = (number) =>{
    if (currentNumber == 0) {
        currentNumber = number
    } else{
        currentNumber += number
    }
}

const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

const updateScreen = (number) =>{
    calcScreen.value = number;
}

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }

    currentNumber = result;
    calculationOperator = '';
}

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';

}

inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}


numbers.forEach((number) => {

    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })

})

operators.forEach((operator) => {

    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value);
    })

})

equalSign.addEventListener("click", () =>{
    calculate();
    updateScreen(currentNumber);
})

clearBtn.addEventListener("click", () =>{
    clearAll();
    updateScreen(currentNumber);
})

decimal.addEventListener("click", (event) =>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber);
})