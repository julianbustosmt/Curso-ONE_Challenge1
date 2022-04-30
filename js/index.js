
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

const encrypttext = (text) => {
    let encryptedText = ""
    for (let i = 0; i < text.length; i++) {
        encryptedText += encrypt(text[i]);
    }
    return encryptedText
}

/*Decrypt*/
const decryptText = (text) => {
    let decryptedText = ''
    for (let i = 0; i < text.length;) {
        switch (text[i]) {
            case 'e':
                if (text[i + 4] === 'r') { decryptedText += text[i]; i += 5 }
                break
            case 'i':
                if (text[i + 3] === 's') { decryptedText += text[i]; i += 4 }
                break
            case 'a':
                if (text[i + 1] === 'i') { decryptedText += text[i]; i += 2 }
                break
            case 'o':
                if (text[i + 3] === 'r') { decryptedText += text[i]; i += 4 }
                break
            case 'u':
                if (text[i + 3] === 't') { decryptedText += text[i]; i += 4 }
                break
            default:
                decryptedText += text[i++]
        }
    }
    return decryptedText
}
