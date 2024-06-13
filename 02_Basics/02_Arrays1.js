const marvel_heroes = ["Thor" , "Iron-man" , "Captain America"]
const dc_heroes = ["Superman","Batman","Aquaman"]
// console.log(marvel_heroes)
// console.log(dc_heroes)


const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);


// Modern way of writing 
const all_heroes1 = [ ...marvel_heroes , ...dc_heroes]
console.log(all_heroes1)

const another_array = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
