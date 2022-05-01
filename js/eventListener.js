
const inputText = document.getElementById("input-text")
const btnEncrypt = document.getElementById("btn-encrypt")
const btnDecrypt = document.getElementById("btn-decrypt")
const info = document.querySelector(".info")
console.log(info)

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

    if(!expresion.test(key)){
        addWarnign(info)
    }else{
        removeWarnign(info)
        inputText.disabled = false
    }
})

