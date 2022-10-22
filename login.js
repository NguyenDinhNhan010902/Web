var emailArray=[];
var passwordArray=[];

// var emailbox = document.getElementById("email");
// var signupBox = document.getElementById("signup");

// var linkSignup = document.getElementById("linkSignup");
// var regTab = document.getElementById("linkSignin");


function signup(){
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var nlpassword = document.getElementById("nlpassword").value;
    var error_message = document.getElementById("error_message");
  
    error_message.style.padding = "10px";
    var text;

    if(email==""){
        text = "email không đc rổng";
        error_message.innerHTML = text;
        return ;
    }
    else if(email.indexOf("@gmail.com")==-1){
        text = "email không đúng định dạng";
        error_message.innerHTML = text;
        return ;

    }
    else if(email.length<20){
        text = "email phải trên 6 kí tự";
        error_message.innerHTML = text;
        return ;
}

        // password
    else if(password==""){
            text = "email không đc rổng";
            error_message.innerHTML = text;
            return ;
        }
        
    else if(password.length<=8){
            text = "pass phải trên 8 kí tự";
            error_message.innerHTML = text;
            return ;
    }
    else if(nlpassword ==""){
        text = "nhập lại pass không đc rổng";
        error_message.innerHTML = text;
        return ;
        
    }
    else if(nlpassword!=password){
        text = "nhập lại pas sai";
        error_message.innerHTML = text;
        return ;
    }
   
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);
        alert("đăng kí thành công, đăng nhập vào web ngay")
        window.location.href="index3c.html"
        

        document.getElementById("email").value ="";
        document.getElementById("password").value="";
        document.getElementById("nlpassword").value="";
    }
    else{
        text = email + " đã đăng kí";
        error_message.innerHTML = text;
        return ;

}}

function login(){
    event.preventDefault();

    var email = document.getElementById("emaillogin").value;
    var password = document.getElementById("passwordlogin").value;
    var error_message = document.getElementById("error_message");
  
    error_message.style.padding = "10px";
    var text;

    var i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            text = "chưa nhập email";
            error_message.innerHTML = text;
            return ;
        }
        alert("email không tồn tại");
        return;
     }  
     else if(passwordArray[i] != password){
        if (password == ""){
            text = "chưa nhập mk";
            error_message.innerHTML = text;
            return ;
            
        } 
        alert("Sai mk");
                return ;

}
    else {
    alert(email + " đăng nhập thành công");

    document.getElementById("emaillogin").value ="";
    document.getElementById("passwordlogin").value="";
    return ;
}

}




    
