const score = 200
if(score > 100){
    const power = "fly"
    // console.log(`User power: ${power}`)
}
// console.log(`User power: ${power}`)

const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if(userLoggedIn && debitCard){
    // console.log("Allow to access the course")
}
if(userLoggedInFromGoogle || userLoggedInFromEmail){
    // console.log("User logged in ")
}


// for loop
for(let i=0;i<=10;i++){
    const element = i;
    console.log(element)
}
