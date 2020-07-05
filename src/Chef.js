class Chef {
  constructor(chefName, restaurant) {
    this.name = chefName;
    this.restaurant = restaurant;
    this.greetCustomer = function greetCustomer(customerName, isMorning){
      if (isMorning === true) {
        return `Good morning, ${customerName}!`;
      } else {
        return `Hello, ${customerName}!`
      };
    };
    this. checkForFood = function checkForFood(foodItem) {
      if (foodItem.type === 'breakfast') {
        return `Yes, we're serving ${foodItem.name} today!`;
      } else {
        return `Sorry, we aren't serving ${foodItem.name} today.`;
      }
    }
  }
}

module.exports = Chef;
