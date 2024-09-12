const screenResult = document.querySelector("#result");
screenResult.textContent = '0';

let firstNum;
let secondNum;
let activeOperator;

let activeNum = firstNum;

const acBTN = document.querySelector("#ac");
acBTN.addEventListener("click", () => {

    screenResult.textContent = '0';
    firstNum = 0;
    activeNum = firstNum;

})

const negativeBTN = document.querySelector("#negative")
negativeBTN.addEventListener("click", () => {
    if (screenResult.textContent == '0') { 

    } else { 
        let result = parseFloat(screenResult.textContent) *= -1;
        screenResult.textContent = result.toString();
    }
})


const percentBTN = document.querySelector("#percent")
percentBTN.addEventListener("click", () => {
    let result = parseFloat(screenResult.textContent) * 0.01;
    result = result.toString();
    result = parseFloat(result);
    screenResult.textContent = result.toString();    
});

const divideBTN = document.querySelector("#divide");
divideBTN.addEventListener("click", () => operatorPress('divide'));

const sevenBTN = document.querySelector("#seven");
sevenBTN.addEventListener("click", () => numberPress('7'));

const eightBTN = document.querySelector("#eight");
eightBTN.addEventListener("click", () => numberPress('8'));

const nineBTN = document.querySelector("#nine");
nineBTN.addEventListener("click", () => numberPress('9'));

const multiplyBTN = document.querySelector("#multiply");

const fourBTN = document.querySelector("#four");
fourBTN.addEventListener("click", () => numberPress('4'));

const fiveBTN = document.querySelector("#five");
fiveBTN.addEventListener("click", () => numberPress('5'));

const sixBTN = document.querySelector("#six");
sixBTN.addEventListener("click", () => numberPress('6'));

const subtractBTN = document.querySelector("#subtract");

const oneBTN = document.querySelector("#one");
oneBTN.addEventListener("click", () => numberPress('1'));

const twoBTN = document.querySelector("#two");
twoBTN.addEventListener("click", () => numberPress('2'));

const threeBTN = document.querySelector("#three");
threeBTN.addEventListener("click", () => numberPress('3'));

const addBTN = document.querySelector("#add");

const zeroBTN = document.querySelector("#zero");
zeroBTN.addEventListener("click", () => numberPress(0));

const dotBTN = document.querySelector("#dot");
dotBTN.addEventListener("click", () => {

    if (screenResult.textContent === "0" || screenResult.textContent.includes('.')) {

    } else {
        screenResult.textContent += '.';
    }
    
});

const resultBTN = document.querySelector("#getResult");

function numberPress(num) {
    if (screenResult.textContent === '0') { screenResult.textContent = num;
        } else { screenResult.textContent += num; }    
};

function operatorPress(operator) {
    activeOperator = operator;
};

function operate(operator, firstNum, secondNum) {

    a = firstNum;
    b = secondNum ?? firstNum;
    let sum = 0;

    switch (operator) {

        case 'divide':
            sum = a / b;
            break;
        
        case 'multiply':
            sum = a * b;
            break;

        case 'subtract':
            sum = a - b;
            break;

        case 'add':
            sum = a + b;
            break;

    }

    return sum;

};