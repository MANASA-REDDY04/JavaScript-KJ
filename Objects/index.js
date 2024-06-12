// Objects

let product = {
  // Two ways to define property 
  // property : value
  company : 'Zara',
  price : 340,
  'item-name': 't-shirt', 
}

// Shorthands
// Destructuring
// let company = product.company;
// console.log(company)
// is same as
let { company,price } = product;
console.log(company);

// Accessing
console.log(product)
console.log(product.company)
console.log(product['price'],product['item-name'])
let productName = 'item-name'
console.log(product[productName])

// Deleting
delete product.company
console.log(product)

// nested object and methods
let student = {
  name : 'Manasa',
  age : 20,
  friends : {
    abhinaya : 21,
    adithi : 22,
    sowcharya : 40,
  },
  // shorthand
  // displayFirendsAge() { ... }
  displayFriendsAge : function(){
    console.log(`Abhinaya: ${this.friends.abhinaya}, 
    Adithi: ${this.friends.adithi}, 
    Sowcharya: ${this.friends.sowcharya}`)
  },
}
console.log(student.friends);
console.log(student.displayFriendsAge())

// Object references
let x = {num : 5};
let y = x;
console.log(`x = ${x.num}, y = ${y.num}`)
x.num = 7;
console.log(`x = ${x.num}, y = ${y.num}`)

// AutoBoxing
// auto conversion of objects and promitives, Ex: string methods

