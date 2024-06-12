let product = ['jeans',{qty:2},false,270]
let items = ['jeans','croptop','kurtis','lehanga','t-shirts']

console.log(product[1])
console.log(items)
// push/pop: add or remove to end
items.push('cotton-pants')
console.log(items)
console.log(`popped ${items.pop()}`)

// unshift/shift: add or remove to first
console.log(product)
product.unshift('zara')
console.log(product)
items.shift()
console.log(items)

// splice: startIndex, No of Items to be deleted
product.splice(1,3)
console.log(product)

// destructure arrays
let [a,b,c] = items;
console.log(a,b,c);