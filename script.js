const inputEl=document.querySelector('.inpu-box');
const btnEl=document.querySelectorAll('button');


btnEl.forEach((element)=>{
  element.addEventListener('click', (e)=>{
    const btnText=e.target.textContent;
    if(btnText==='='){
      try{
        inputEl.value=eval(inputEl.value);
      }catch(error){
        inputEl.value="Error";
      }
    }
    else if(btnText==='AC'){
      inputEl.value='';
    }
    else{
      inputEl.value+=btnText;
    }
    
  })
  
});
