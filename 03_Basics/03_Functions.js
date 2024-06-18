// Preferred way to create a function 

// const addNumber = (number1 , number2) => {
//     return number1 + number2
// }
// console.log(addNumber(3,5))

function addNumber(number1 , number2){
    return number1 + number2;
}
const result = addNumber(3,5)
// console.log(result)

const user = {
    username: "Tushar",
    age:21
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}
// handleObject(user)
handleObject({
    username: "Rohan",
    age: 21
})

const myNewArray = [200,300,400]
function returnSecondValue(getArray){
    // return getArray[1]  + getArray[2]
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,1000]))