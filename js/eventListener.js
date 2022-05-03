
const inputText = document.getElementById("input-text")
const info = document.querySelector(".info")
const infoSvg = document.getElementById("info-svg")
const infoSvgWarning = document.getElementById("info-svg-warnin")
const btnEncrypt = document.getElementById("btn-encrypt")
const btnDecrypt = document.getElementById("btn-decrypt")

const outputText = document.getElementById("output-text")
const outputP = document.getElementById("output-p")
const btnCopy = document.getElementById("btn-copy")


btnEncrypt.addEventListener("click", ()=> { 
    const text = encryptText(inputText.value)
    output(text)
})  

btnDecrypt.addEventListener("click", ()=> { 
    const text = decryptText(inputText.value)
    output(text)
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

