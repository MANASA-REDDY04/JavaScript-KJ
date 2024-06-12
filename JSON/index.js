let product = {
  company : 'Zara',
  price : 740,
  item_name: 't-shirt', 
}

/*
  JSON: JavaScript Object Notation
  js object --> json object [stringify()]
  json object --> js object [parse()]
*/

console.log(typeof product)
console.log(product)

let product1 = JSON.stringify(product)
console.log(typeof product1)
console.log(product1)

let product2 = JSON.parse(product1)
console.log(typeof product2)
console.log(product2)