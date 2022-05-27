"user strict";
let ermao = document.querySelector('#ermao');
let dough = document.querySelector('#dough');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

ermao.addEventListener('click',()=>{
    input1.value = parseInt(input1.value) + 1;
})

dough.addEventListener('click',()=>{
    input2.value = parseInt(input2.value) + 1;
})


