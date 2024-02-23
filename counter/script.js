let increase= document.querySelector('#inc');
let decrease= document.querySelector('#dec');
let reset= document.querySelector('#res');
let main= document.querySelector('#counter')

let count=0;
increase.addEventListener('click',function(){
    main.textContent = ++count;

});
 
decrease.addEventListener('click',function(){
    main.textContent = --count;
    
});

reset.addEventListener('click',function(){
    count=0;
    main.textContent = count;
    
    
});