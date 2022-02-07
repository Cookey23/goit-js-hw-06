const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const IngredientsEl = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  IngredientsEl.append(itemEl);

})
