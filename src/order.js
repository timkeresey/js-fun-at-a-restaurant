
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
};
 function takeOrder(order, deliveryOrders) {
   if (deliveryOrders.length < 3) {
     return deliveryOrders.push(order);
   } else {
     return deliveryOrders;
   };
 };

 function refundOrder(orderNum, deliveryOrders) {
   var indexPos = orderNum - 1;
   for (var i = 0; i === indexPos; i++) {
     deliveryOrders.splice(indexPos, 1);
   };
};

function listItems(deliveryOrders) {
  orderArray = deliveryOrders.map(function(order) {
    return order.item
  });
  return orderArray.join(', ');
};

function searchOrder(deliveryOrders, food) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    var isOrder = deliveryOrders[i].item === food;
    return isOrder;
  };
};
