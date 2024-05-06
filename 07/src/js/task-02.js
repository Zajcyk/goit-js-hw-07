const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

const listItems = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;  // Ustawienie zawartości tekstowej elementu li
  li.classList.add('item');     // Dodanie klasy "item" do elementu li
  return li;
})

ingredientsList.append(...listItems)// dodajemy wszystkie elementy li








