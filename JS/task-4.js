const btnDecRef = document.querySelector(".btn-dec");
const countRef = document.querySelector(".counter");
const btnIncRef = document.querySelector(".btn-inc");
const containerRef = document.querySelector("#counter-container");
containerRef.style.marginTop = "5px";
btnDecRef.style.padding = "5px";
btnIncRef.style.padding = "5px";
countRef.style.padding = "5px";

let result = Number(countRef.textContent);

btnDecRef.addEventListener("click", () => {
  if (result > 0) {
    countRef.textContent = result -= 1;
  }
});

btnIncRef.addEventListener("click", () => {
  countRef.textContent = result += 1;
});
