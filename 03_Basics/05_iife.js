// Immediately Invoked functional Expression (IIFE)
(function tus(){
    console.log(`DB Connected`)
})();

((name)=>{
    console.log(`DB Connected two ${name}`);

})("TusharKumar");