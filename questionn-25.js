// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Adding "Meat" at beginning
shoppingCart.unshift("Meat");

// Adding "Sugar" at the end.
shoppingCart.push("Sugar");

// Removing Honey;
delete shoppingCart[4];

//modify Tea to 'Green Tea'
shoppingCart.splice(3,1,'Green Tea');

console.log(shoppingCart);