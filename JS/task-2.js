const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
  "Молоко",
  "Пирожки",
];

const list = document.querySelector("#ingredients");

list.prepend(...ingredients.map(createLi));

function createLi(text) {
  const el = document.createElement("li");
  el.textContent = text;
  return el;
}
