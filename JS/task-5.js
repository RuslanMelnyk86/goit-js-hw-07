const refs = {
  nameInput: document.querySelector(["#name-input"]),
  nameOutput: document.querySelector(["#name-output"]),
};

refs.nameInput.addEventListener("input", changeName);

function changeName(event) {
  if (event.currentTarget.value === "") {
    refs.nameOutput.textContent = "незнакомец";
  } else {
    refs.nameOutput.textContent = event.currentTarget.value;
  }
}
