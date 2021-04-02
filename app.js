
var errorParagraph=document.getElementById("errorMessage");

function validateForm(form){
  
     if(form.Activity_Title.value != "" && form.Activity_Content.value != "" ){
        errorParagraph.innerHTML="Your last sent activity to vathe bucket list was <br> "+"Title: "+ form.Activity_Title.value +"<br>"+"Description: "+form.Activity_Content.value;
        localStorage.setItem(form.Activity_Title.value,form.Activity_Content.value);
       
       return true;
     }else{
        errorParagraph.innerHTML="You must complete the entire form!";
        return false;
     }
     

}


function ShowList(){

var x,txt="",localStorageArray;

var localStorageArray=Object.values(localStorage);

for( x in localStorageArray ){
   
   txt+=localStorageArray[x]+"<br>";

}

errorParagraph.innerHTML=txt;

}