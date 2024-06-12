// Assigning function to a variable

let sum = function(a,b){
  return a+b
}

console.log(sum(3,4))
let newSum = sum
console.log(newSum(4,9))

// Anonymus functions

let sumOfThree = function(num1,num2,num3,sumOfTwo){
  let result = sumOfTwo(num1,num2)
  return sumOfTwo(result,num3)
}

console.log(sumOfThree(3,4,5,sum))

// Arrow functions
/**
 -> for single argument, () optional
 -> for single statement, {} and return optional
 -> often used when passing functions as arguments
 */

 let squares = num => num * num
 console.log(squares(5))

 let sum2 = (p,q) => p+q
 console.log(sum2(5,4))

 // Async functions

 let alaram = () => console.log('Wake Up!')
 let timerId = setTimeout(alaram,7000)
 console.log(`timer set ${timerId}`)
 clearTimeout(timerId)

 let intervalId = setInterval(alaram,1000)
 setTimeout(()=> clearInterval(intervalId),5000)
 