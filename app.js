const inputedWords = document.getElementById("words")

const advanceOptionToggle = document.querySelector(".advance-toggle")
const advanceOptionArrow = document.getElementById("advance-option_arrow")

const advanceOption = document.querySelector(".advance-options")
const replaceWith = document.getElementById("replace-with")
const caseSensitivity = document.getElementById("case-sensitivity")

const text = document.getElementById("text")

const redact = document.getElementById("redact")
const stats = document.querySelector(".stats")



advanceOptionToggle.addEventListener("click", advanceToggleHandler)
redact.addEventListener("click", redactHandler)


function advanceToggleHandler() {

 if (advanceOption.style.height !== "5rem") {
        advanceOption.style.height = "5rem";
        advanceOption.style.padding = "0.3rem"
        advanceOptionArrow.innerHTML = "&#9650" 
 } else if (advanceOption.style.height == "5rem"  ) {
        advanceOption.style.height = "0"
        advanceOption.style.padding = "0 0.3rem"
        advanceOptionArrow.innerHTML = "&#9660"
 }  
}   


function redactHandler() {
    startTime = performance.now()

    if (inputedWords.value.trim()) {
        wordsToReplace = inputedWords.value.split(",")
    } else {
        alert("enter word you want to replace")
        return
    }
    
    if (text.value.trim()) {
        textToReplace = " " + text.value.trim() + " "
    } else {
        alert("enter text to scramble")
        return
    }
    

    if (replaceWith.value.trim()) {
        wordToReplaceWith = " " + replaceWith.value.trim() + " "
    } else {
        wordToReplaceWith = " **** "
    }

    if (caseSensitivity.checked) {
        __caseSensitivity = "g"
    } else {
        __caseSensitivity = "ig"
    }

    wordsScanned = text.value.split(" ").length
    totalWordScrambled = 0
    totalChracterScrambled = 0

    
    wordsToReplace.forEach(word => {
        wordReg = new RegExp("[?!^ .,?!;\r\n\s]" + word.trim() + "[?!^ .,?!;\r\n\s]", __caseSensitivity )

        if (textToReplace.match(wordReg))  {
            wordScrambled = textToReplace.match(wordReg).length 
            chracterScrambled = wordScrambled * word.trim().length
            totalWordScrambled += wordScrambled * word.split(" ").length
            totalChracterScrambled += chracterScrambled
        }

        textToReplace = textToReplace.replace(wordReg, wordToReplaceWith)
        textToReplace = textToReplace.replace(wordReg, wordToReplaceWith)
        textToReplace = textToReplace.replace(/\s\s/g, " ")

        text.value = textToReplace.trim()
    });


    

    endTime = performance.now()
    timeTaken = (endTime - startTime).toFixed(4)

    console.log(wordsScanned, totalWordScrambled, totalChracterScrambled, timeTaken)

    stats.innerText = `Words scaned: ${wordsScanned}
        Words scrambled: ${totalWordScrambled}
        Character scrambled: ${totalChracterScrambled}
        Time: ${timeTaken} ms  
    `

    window.scrollBy(0, 100);

}

//make it such that punctuation is not removed



