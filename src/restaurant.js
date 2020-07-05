function createRestaurant(restaurantName) {
  var menuTypes = {
    breakfast: [],
    lunch: [],
    dinner: [],
  };
  var restaurant = {
    name: restaurantName,
    menus: menuTypes,
  };
  return restaurant;
};

function addMenuItem (restaurant, menuItem) {
  var menuType = menuItem.type;
  var menuArray = restaurant.menus[menuType];
  if (menuArray.includes(menuItem)) {
    return restaurant.menus;
  } else {
  menuArray.push(menuItem);
  };
};

function removeMenuItem (restaurant, menuItemName, menuTypeName) {
  if (menuTypeName === undefined) {
    return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`;
  } else {
    var menuArray = restaurant.menus[menuTypeName];
    for (i = 0; i < menuArray.length; i++) {
      var menuItem = menuArray[i].name;
      if (menuItemName === menuItem){
        menuArray.splice(i, 1);
        return `No one is eating our ${menuItemName} - it has been removed from the ${menuTypeName} menu!`;
      } else {
        return resturant.menus;
      };
    };
  };
};


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
