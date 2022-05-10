
const inputText = document.getElementById("input-text")
const info = document.querySelector(".info")
const infoSvg = document.getElementById("info-svg")
const infoSvgWarning = document.getElementById("info-svg-warning")
const btnEncrypt = document.getElementById("btn-encrypt")
const btnDecrypt = document.getElementById("btn-decrypt")

const sectionOutput = document.querySelector(".output")
const mainImage = document.getElementById("main-image")
const outputText = document.getElementById("output-text")
const outputP = document.getElementById("output-p")
const btnCopy = document.getElementById("btn-copy")


btnEncrypt.addEventListener("click", () => {
    const text = encryptText(inputText.value)
    if (text.length > 0) {
        output(text)
        autoSize(outputText)
        outputText.scrollIntoView()
    } else {
        const title = "Ningún mensaje fue encontrado"
        const paragraph = "Ingrese el texto que desea encriptar"
        modalContent(title, paragraph)
    }
})

btnDecrypt.addEventListener("click", () => {
    const text = inputText.value

    if (text.length === 0) {
        const title = "Ningún mensaje fue encontrado"
        const paragraph = "Ingrese el texto que desea desencriptar"
        modalContent(title, paragraph)
    } else {
        try {
            output(decryptText(text))
            autoSize(outputText)
            outputText.scrollIntoView()
        } catch (error) {
            const title = "Error"
            const paragraph = "Cadena inválida"
            modalContent(title, paragraph)
        }
    }
})

inputText.addEventListener("keydown", (event) => {

    let expresion = /[a-z]/
    let key = event.key;
    clear();

    if (expresion.test(key) || key == " ") {
        removeWarnign(info)
        infoSvgWarning.classList.add("hidden")
        infoSvg.classList.remove("hidden")

    } else {
        addWarnign(info)
        event.preventDefault()
        infoSvg.classList.add("hidden")
        infoSvgWarning.classList.remove("hidden")
    }
})

inputText.addEventListener("input", ()=>{
    autoSize(inputText)
    autoSize(outputText)
})

const copyCheck = document.querySelector(".copy-check")
btnCopy.addEventListener("click", () => {
    const textToCopy = outputText.value
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            copyCheck.classList.add("copy-check--show")
            copyCheck.classList.add("animate__pulse")
            window.setTimeout(copyClear,2000) 
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })
})
