const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
function ingredientTemplate(ingredient) {
  const item = document.createElement("li");
  item.textContent = `${ingredient}`;
  item.classList.add("item");
  return item;
};

function loopTemplate(ingredients) {
  return ingredients.map(ingredientTemplate)
};

function renderIngridient(ingredients) {
  const ulRef = document.querySelector("#ingredients");
  console.log("ulRef", ulRef);
  const list = loopTemplate(ingredients)
  console.log("list", list);
  ulRef.append(...list);
}

renderIngridient(ingredients)