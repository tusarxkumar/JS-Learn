const myArr = [0,1,2,3,4,5]

console.log("A" , myArr)
// slice() method does not alter the original array but instead creates a shallow copy.
const myArr1 = myArr.slice(1,3) 
console.log(myArr1)
console.log("B" , myArr)

// the splice() method will change the contents of the original array
const myArr2 = myArr.splice(1,3)
console.log(myArr2)
console.log("C", myArr)

