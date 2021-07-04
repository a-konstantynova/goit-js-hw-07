const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('ul#ingredients');
const listItems = items => {
  const unit = document.createElement(`li`);
  unit.textContent = items;
  return unit;
};
const allUnits = ingredients.map(items => listItems(items));
ingredientsList.append(...allUnits);
console.log(ingredientsList);
