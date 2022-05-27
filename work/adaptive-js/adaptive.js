const report = document.querySelector('.info__report');
const button = document.querySelector('.add-form__submit');
const input = document.querySelector('.label__input');

button.setAttribute("type","button");

input.addEventListener("input", isDisable);
function isDisable(){
    if(input.value === ''){
        button.disabled = true;
    }else{
        button.disabled = false;
    }
}

let count = 0;
let labels = {};

button.addEventListener("click", countClicks);

function countClicks(){
    let temp = input.value;
    if(temp in labels){
        lables[temp] ++;
        count = labels[temp];
    }else{
        labels[temp]=1;
        count=1;
    }
    report.innerHTML = "The count for " + temp + " is " + count;


}


