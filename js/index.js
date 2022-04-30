
/*Encrypt*/
const encrypt = (letter) => {

    const encryptkeys = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    }

    for (const vowel in encryptkeys) {
        if (vowel == letter) {
            return (encryptkeys[vowel])
        }
    }
    return (letter)
}

const textEncrypt = (text) => {
    let finalText = ""
    for(let i = 0; i<text.length; i++){
        finalText += encrypt(text[i]);
    }
    return finalText
}


