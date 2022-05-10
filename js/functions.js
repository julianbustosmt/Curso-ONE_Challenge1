function output(text) {
    outputText.value = text
    btnCopy.classList.remove("hidden")
    outputP.classList.add("hidden")
}

const copyClear = () =>{
    inputText.value = ""
    copyCheck.classList.remove("copy-check--show")
    copyCheck.classList.remove("animate__pulse")
}

const clear = () =>{
    outputText.value = ""
    outputP.classList.remove("hidden")
    btnCopy.classList.add("hidden")
}

const addWarnign = (element) => {
    element.classList.add("animate__shakeX")
    element.classList.add("warning")
}

const removeWarnign = (element) => {
    element.classList.remove("animate__shakeX")
    element.classList.remove("warning")
}

const modalContent = (title, paragraph) => {

    const modalTitle = document.querySelector(".modal-title")
    const modalParagraph = document.querySelector(".modal-paragraph")

    modalTitle.textContent = title
    modalParagraph.textContent = paragraph

    const modal = document.getElementById("modal")
    modal.classList.add("modal--show")

    const closeModal = document.querySelector(".modal-close")
    closeModal.addEventListener("click", (event) => {
        modal.classList.remove("modal--show")
        event.preventDefault()
    })

}

const autoSize = (element) =>{
    element.style.height = "auto"
    element.style.height = `${element.scrollHeight}px`
}


