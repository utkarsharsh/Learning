// Online JavaScript compiler (editor)
// Write and run JavaScript online using this JS editor.

console.log("Try clicking the Run button.");
async  function myapi() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',{
        headers:{
            'Content-type' : 'application/json',
        }
        ,
        method:'GET'
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
  
   
  } catch (err) {
    throw err;
  }
}
myapi().then((data)=>{
  console.log(data);
}).catch((err)=>{
  console.log(err)
});






