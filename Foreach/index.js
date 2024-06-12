let foods = ['pizza','pasta','biryani','dal dokhli','butter naan']

foods.forEach(food => console.log(food))
// cannot use in case you want to break the loop and return
// array.forEach(function)

// Map

let arr = [1,2,3,4,5,6,7,8,9,10]

let odds = arr.filter((num,index) => num % 2 != 0)
let squares = arr.map((num) => num * num)

console.log(odds)
console.log(squares)