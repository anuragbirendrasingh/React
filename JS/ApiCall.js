let api = "https://jsonplaceholder.typicode.com/todos/1";
async function callApi(){
// console.log("B");
//   const data = await fetch(api);
//   console.log(data);
// console.log("C");
return 100 ;
}
// console.log("D");
let c = callApi();
// console.log("A");
c.then((mess)=>{
    console.log(mess);   
})

