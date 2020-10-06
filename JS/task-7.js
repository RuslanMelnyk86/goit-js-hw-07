const FontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

FontSizeControl.addEventListener("input", changeFont);

function changeFont() {
  text.style.fontSize = this.value + "px";
}
