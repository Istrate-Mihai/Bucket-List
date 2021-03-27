document.addEventListener('DOMContentLoaded',()=>{

    var form=document.forms[0];
    var formButton=form['submitButton'];
    
    formButton.addEventListener("click",call);
    
    
    function call(){
    
        document.write("The form was submitted,to be continued!");
    }



});


