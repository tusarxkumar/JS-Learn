/*
    Object literals are like container. Variable inside container are known as properties
    and Functions inside container are known as methods.
    Both inside are termed as Members
*/


const pObj={}; // Empty object literal

// 1st Way 
// pObj.pCode = "1001";
// pObj.pName = "Software";
// pObj.getData = function(){
//     console.log(pObj.pCode,pObj.pName);
// } 
// pObj.getData();


// Inside the object literal
const productObj={
    pCode:"1001",
    pName:"Software",
    getData:function(){
        console.log(pObj.pCode,pObj.pName);
    }
};
console.log(productObj);