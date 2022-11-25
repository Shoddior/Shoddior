
const time=document.querySelector(".js-conteiner" );
const next=document.querySelector(".js-work")  ;
const clear=document.querySelector(".js-works")  ;

let counter=0;

time.innerText=counter

next.addEventListener("click",()=>{
counter+=1;
time.innerText=counter
});
clear.addEventListener("click",()=>{
    counter=0
    time.innerText=counter
    
})


console.log(counter);





 