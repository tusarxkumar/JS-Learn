<<<<<<< HEAD
// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Tushar"
tinderUser.isLoggedIn = false
// console.log(tinderUser)
const course = {
    coursename: "JSwithTushar",
    coursePrice: "9999",
    courseInstructor: "Tushar"
}

//Destructuring Objects

// const {courseInstructor} = course
const {courseInstructor:Instructor} = course
// console.log(courseInstructor)
=======
// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Tushar"
tinderUser.isLoggedIn = false
// console.log(tinderUser)
const course = {
    coursename: "JSwithTushar",
    coursePrice: "9999",
    courseInstructor: "Tushar"
}

//Destructuring Objects

// const {courseInstructor} = course
const {courseInstructor:Instructor} = course
// console.log(courseInstructor)
>>>>>>> 4600c0856855101c5abcee06aa41677553111dbc
console.log(Instructor)