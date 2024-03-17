const numberDisplay = document.getElementById("number-display")
const operationNamesList = ["divide", "multiply", "minus", "add"]
const clearButton = document.getElementById("clear-button")
const clearButtonSymbol = clearButton.children[0]

let currentChosenOperation = ""
let inputNumber
setInputNumber(0, "AC")

for (let i = 0; i < 10; i++) {
    document.getElementById("number-" + i + "-button").addEventListener("click", function (e) {
        console.log(inputNumber + this.id.charAt(7))
        setInputNumber(parseFloat(inputNumber + this.id.charAt(7)), "C")
    })
}

clearButton.addEventListener("click", event => {
    if (clearButtonSymbol.innerHTML == "C") {
        setInputNumber(0, "AC")
        return
    }
    if (clearButtonSymbol.innerHTML == "AC") {
        operationButtonsStyleReset()
    }
})

document.getElementById("plus-minus-button").addEventListener("click", event => {
    setInputNumber(inputNumber * -1, "C")
})

document.getElementById("percent-button").addEventListener("click", event => {
    setInputNumber(inputNumber / 100, "C")
})

document.getElementById("dot-button").addEventListener("click", event => {
    setInputNumber(inputNumber + ".", "C")
})

for (let i = 0; i < operationNamesList.length; i++) {
    let currentOperation = operationNamesList[i];
    document.getElementById(currentOperation + "-button").addEventListener("click", function (e) {
        operationButtonsStyleReset()
        this.children[0].style.color = "#ff9f0a"
        this.style.backgroundColor = "#ffffff"
    })
}

function operationButtonsStyleReset() {
    for (let i = 0; i < operationNamesList.length; i++) {
        let currentOperationButton = document.getElementById(operationNamesList[i] + "-button");
        currentOperationButton.children[0].style.color = "#ffffff"
        currentOperationButton.style.backgroundColor = "#ff9f0a"
    }
}

function setInputNumber(num, clearButtonSymbolChangeTo) {
    inputNumber = num
    numberDisplay.innerHTML = inputNumber
    let inputNumberLength = num.toString().length
    numberDisplay.style.fontSize = Math.round(176 / inputNumberLength * Math.min(6, inputNumberLength)).toString() + "px"
    clearButtonSymbol.innerHTML = clearButtonSymbolChangeTo
}
