const inputSymbols = document.querySelector(["#validation-input"]);
const inputLength = inputSymbols.getAttribute("data-length");

inputSymbols.addEventListener("input", checkSymbols);

function checkSymbols() {
  if (inputSymbols.value.length > inputLength) {
    inputSymbols.classList.remove("valid");
    inputSymbols.classList.add("invalid");
  } else {
    inputSymbols.classList.remove("invalid");
    inputSymbols.classList.add("valid");
  }
}
