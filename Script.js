var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput',email_verify);
password.addEventListener('textInput',pass_verify);

function validated(){
    if(email.value.length < 9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length < 6){
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
}
}
function email_verify(){
    if(email.value.length >=8){
        email.style.border = "1px solid silver";
        email_error.style.display ="none";
        return true;
    }
}function pass_verify(){
    if(password.value.length >=6){
        password.style.border = "1px solid silver";
        pass_error.style.display ="none";
        return true;
    }
}


                  
function send(event){
  event.preventDefault();
Email.send({ 
    SecureToken:"1a7768a1-1a52-490c-866f-86ccaca61840",
    name:document.getElementById('name').value,       
    Host:"smtp.elasticemail.com",
    Username:"michael20020409@gmail.com",
    Password:"D7F122FDD325BA9527145BCC7511B077A4C3",
    From:document.getElementById('email').value,
    To:"techieeeditz@gmail.com",
    Subject:document.getElementById('subject').value,
    Body:document.getElementById('message').value
    
    
}).then(
    message=>alert("message sent succesfully")
);   
}




    

     
     
     
    

    
    
       
    