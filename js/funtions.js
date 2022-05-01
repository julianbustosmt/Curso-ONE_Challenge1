function output(text){
    outputText.value = text
    btnCopy.classList.remove("hidden")
    outputP.classList.add("hidden")
}

const addWarnign = (element) => {
    element.classList.add("animate__shakeX")
    element.classList.add("warning")
}

const removeWarnign = (element) => {
    element.classList.remove("animate__shakeX")
    element.classList.remove("warning")
}
