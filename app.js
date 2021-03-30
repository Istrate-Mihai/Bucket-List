
var errorParagraph=document.getElementById("errorMessage");

function validateForm(form){
  
     if(form.Activity_Title.value != "" && form.Activity_Content.value != "" ){
        errorParagraph.innerHTML="Your last sent activity to the bucket list was <br> "+"Title: "+ form.Activity_Title.value +"<br>"+"Description: "+form.Activity_Content.value;
       return true;
     }else{
        errorParagraph.innerHTML="You must complete the entire form!";
        return false;
     }
     

}































    






