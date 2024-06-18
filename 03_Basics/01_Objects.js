<<<<<<< HEAD
//How to access the symbol from object
const mySym = Symbol("Key1")
// [mySym]:"Key1"

const JsUser={
    [mySym]:"CSK",
    name: "Tushar",
    "full name": "Tushar kumar Parida",
    age: 18,
    Email: "tushar@gmail.com",
    location:"Odisha",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

//prefer way of accessing objects
console.log(JsUser["full name"])
console.log(JsUser["Email"])
console.log(JsUser[mySym])
=======
//How to access the symbol from object
const mySym = Symbol("Key1")
// [mySym]:"Key1"

const JsUser={
    [mySym]:"CSK",
    name: "Tushar",
    "full name": "Tushar kumar Parida",
    age: 18,
    Email: "tushar@gmail.com",
    location:"Odisha",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

//prefer way of accessing objects
console.log(JsUser["full name"])
console.log(JsUser["Email"])
console.log(JsUser[mySym])
>>>>>>> 4600c0856855101c5abcee06aa41677553111dbc
console.log(JsUser)