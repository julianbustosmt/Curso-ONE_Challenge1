
const inputText = document.getElementById("input-text")
const info = document.querySelector(".info")
const infoSvg = document.getElementById("info-svg")
const infoSvgWarning = document.getElementById("info-svg-warning")
const btnEncrypt = document.getElementById("btn-encrypt")
const btnDecrypt = document.getElementById("btn-decrypt")

const outputText = document.getElementById("output-text")
const outputP = document.getElementById("output-p")
const btnCopy = document.getElementById("btn-copy")


btnEncrypt.addEventListener("click", (event)=> { 
    const text = encryptText(inputText.value)
    if(text.length > 0){
        output(text)
    }else{
        const title = "Ningún mensaje fue encontrado"
        const paragraph = "Ingrese el texto que desea encriptar"
        modalContent(title,paragraph)
    }
})  

btnDecrypt.addEventListener("click", (event)=> { 
    const text = decryptText(inputText.value)
    if(text.length > 0){
        output(text)
    }else{
        const title = "Ningún mensaje fue encontrado"
        const paragraph = "Ingrese el texto que desea desencriptar"
        modalContent(title,paragraph)
    }
})  

inputText.addEventListener("keydown", (event)=>{

    let expresion = /[a-z]/
    let key = event.key;

    if(expresion.test(key) || key == " " ){
        removeWarnign(info)
        infoSvgWarning.classList.add("hidden")
        infoSvg.classList.remove("hidden")
        
    }else{
        addWarnign(info)
        event.preventDefault()
        infoSvg.classList.add("hidden")
        infoSvgWarning.classList.remove("hidden")
    }
})

