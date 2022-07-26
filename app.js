const inputedWords = document.getElementById("words")
const advanceOptionToggle = document.querySelector(".advance-toggle")
const advanceOptionArrow = document.getElementById("advance-option_arrow")
const advanceOption = document.querySelector(".advance-options")


advanceOptionToggle.addEventListener("click", advanceToggleHandler)


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