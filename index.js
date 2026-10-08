const i =document.querySelector('#a');
const j =document.querySelector('#val1');
const k =document.querySelector('#val');

console.log('js');

function debounce(fn, delay) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
const de= debounce((text)=>{
 val.innerText=text;
},1000);


i.addEventListener("input",(e)=>{
 
 val1.innerText=e.target.value;
 de(e.target.value);
})