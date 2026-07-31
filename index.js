async function api(){
    const res=await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data =await res.json();
    const hello=document.querySelector('.hello');
    const userIdName=document.querySelector('#userIdName');
    const TitleName=document.querySelector('#TitleName');
    const bodyName=document.querySelector('#bodyName');
    

    userIdName.innerHTML=`<p> ${data.id} </p>`
    TitleName.innerHTML=`<p> ${data.title} </p>`
    bodyName.innerHTML=`<p> ${data.body} </p>` 
    console.log(data);
}

api();




