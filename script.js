const display = document.querySelector("#result");
const keyboard = document.querySelector(".keyboard")

let firstNum = null;
let secondNum = null;
let activeOperator = null;

display.textContent = 0;

keyboard.addEventListener("click", (event) => {

    let target = event.target;

    if (target.classList.contains("number")) {

        if (activeOperator === null && firstNum === null) {

            firstNum = target.textContent;
            display.textContent = Number(firstNum);

        } else if (activeOperator === null && firstNum !== null) {

            firstNum += target.textContent;
            display.textContent = Number(firstNum);

        } else if (activeOperator !== null && secondNum === null) {

            secondNum = target.textContent;
            display.textContent = Number(secondNum);

        } else if (activeOperator !== null && secondNum !== null) {

            secondNum += target.textContent;
            display.textContent = Number(secondNum);

        }
        
    } else if (target.classList.contains("operator")) {

        if (activeOperator === null) {

            activeOperator = target.textContent;
        
        } else { operate(target.textContent, firstNum, secondNum); }
        
        console.log(activeOperator);

    } else if (target.id === 'ac') {

        firstNum = null;
        secondNum = null;
        activeOperator = null;

        display.textContent = '0';

    } else if (target.id === 'negative') {

        if (firstNum !== null && secondNum === null) {

            firstNum *= -1;
            display.textContent = Number(firstNum);

        } else if (secondNum !== null) {

            secondNum *= -1;
            display.textContent = Number(secondNum);

        }

    } else if (target.id === 'percent') {

        if (firstNum !== null && secondNum === null) {

            firstNum *= 0.01;

        } else if (secondNum !== null) {

            secondNum *= 0.01;

        }

    } else if (target.id === 'dot') {

        // console.log(target.id);

    } else if (target.id === 'getResult') {

        if (firstNum !== null && activeOperator !== null) {
            operate(activeOperator, firstNum, secondNum);
        }

    };

})

function operate(operator, firstNum, secondNum) {

    let sum;

    x = Number(firstNum) || 0;
    y = Number(secondNum) || Number(firstNum);

    switch (operator) {

        case '/':
            sum = x / y;
            break;

        case '*':
            sum = x * y;
            break;

        case '-':
            sum = x - y;
            break;

        case '+':
            sum = x + y;
            break;

    }

    firstNum = sum;
    display.textContent = Number(firstNum);

    secondNum = null;    
    activeOperator = null;

}