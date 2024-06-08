// const hello = function(){
//     console.log(this)
// }
// hello()


// arrow
const hello = () => {
    let username = "Tushar"
    console.log(this.username)
}
hello()


const addTwo = (num1 , num2) => {
    return num1+num2
}
console.log(addTwo(4,6))