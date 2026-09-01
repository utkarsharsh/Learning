// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Start small. Ship something.");
let obj = {
    name:"make",
    gift:"frock"
}

Object.entries(obj).forEach((e)=>{
 console.log(e[0]);
});

for(const key in obj){
    console.log(`${obj[key]} : ${key}`);
}