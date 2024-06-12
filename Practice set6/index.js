let arr = [5,6]

console.log(arr)
arr.unshift(4)
arr.push(7)
console.log(arr)

function getElement(position){
  if(position < 0 || position > arr.length)
  return -1
return arr[position]
}

console.log(getElement(8))
console.log(getElement(2))

let copy = arr.slice(1,3) // 3 is exclusive
console.log(copy)




