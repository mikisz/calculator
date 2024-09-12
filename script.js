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

        // console.log(target.id);

    } else if (target.id === 'percent') {

        // console.log(target.id);

    } else if (target.id === 'dot') {

        // console.log(target.id);

    } else if (target.id === 'getResult') {

        if (firstNum !== null && activeOperator !== null) {
            operate(activeOperator, firstNum, secondNum);
        }

    };

})

function operate(operator, x = 0, y = x) {

    let sum;

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
    secondNum = null;
    display.textContent = Number(firstNum);
    activeOperator = null;

}