module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
};

function nameMenuItem(food) {
  return `Delicious ${food}`;
};

function createMenuItem(menuItemName, itemPrice, itemType) {
  var menuItem = {
    name: menuItemName,
    price: itemPrice,
    type: itemType,
  };
  return menuItem
};

function addIngredients(item, ingredients) {
  if(ingredients.includes(item)) {
    return ingredients;
  } else {
  ingredients.push(item);
  return ingredients;
  };
};

function formatPrice(initialPrice) {
  return '$' + initialPrice;
};

function decreasePrice(cost) {
  var tenPercent = cost * .1;
  return cost - tenPercent;
};

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  };
  return recipe;
};
