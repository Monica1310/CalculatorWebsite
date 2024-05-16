window.onload = init;

function init() {
    document.getElementById("addButton").onclick = onAddBtnClicked;
    document.getElementById("subtractButton").onclick = onSubtractBtnClicked;
    document.getElementById("multiplyButton").onclick = onMultiplyBtnClicked;
    document.getElementById("divideButton").onclick = onDivideBtnClicked;
}

function onAddBtnClicked() {
    let number1Field = document.getElementById("number1Field");
    let number2Field = document.getElementById("number2Field");
    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);
    let result = number1 + number2;
    document.getElementById("answerField").value = result;
}

function onSubtractBtnClicked() {
    let number1Field = document.getElementById("number1Field");
    let number2Field = document.getElementById("number2Field");
    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);
    let result = number1 - number2;
    document.getElementById("answerField").value = result;
}

function onMultiplyBtnClicked() {
    let number1Field = document.getElementById("number1Field");
    let number2Field = document.getElementById("number2Field");
    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);
    let result = number1 * number2;
    document.getElementById("answerField").value = result;
}

function onDivideBtnClicked() {
    let number1Field = document.getElementById("number1Field");
    let number2Field = document.getElementById("number2Field");
    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);
    if (number2 === 0) {
        alert("Cannot divide by zero");
        return;
    }
    let result = number1 / number2;
    document.getElementById("answerField").value = result;
}