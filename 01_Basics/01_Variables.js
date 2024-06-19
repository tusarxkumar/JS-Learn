const accountId = 2101020542
let accountName = "Tusar kumar"
let accountEmail = "tusarkumar@gmail.com"
var accountPassword = "password"
let accountState = "Active"

// accountId = 2; not allowed
console.log(`My account id is ${accountId}`)
/*
    Prefer not to use var because
    of issues with Block Scope and Functional Scope
*/
// console.log(accountId)
// console.table([accountId, accountName, accountEmail, accountPassword, accountState])