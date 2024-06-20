// *Function Statement aka Function Declaration
function a() {
    console.log("a is called");
}
// Function Expressions
var b = function () {
    console.log("b is called");
};

// Annonymous Functions
// ! Function having no name is known as AF = Syntax Error
// function (){

// }
//* First class Functions
// ? A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

const fun = ()=>{
    console.log("Having fun");
}
fun(); //* Invoked using variable


// Arrow Functions
const b = () => { };
