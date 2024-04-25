// function validate(){
    var username = document.getElementById("uname");
    var email = document.getElementById("email");
    var password = document.getElementById("pass");
    var number = document.getElementById("number");

    
    
    username.addEventListener("input", function() {
        
        username.style.border = ""; 
        document.getElementById("lbluser").style.visibility = "hidden";
    });
    email.addEventListener("input", function() {
       
        email.style.border = ""; 
        document.getElementById("lblemail").style.visibility = "hidden";
    });
    password.addEventListener("input", function() {
       
        password.style.border = ""; 
        document.getElementById("lblpass").style.visibility = "hidden";
    });
    number.addEventListener("input", function() {
       
       number.style.border = ""; 
        document.getElementById("lblnumber").style.visibility = "hidden";
    });
    
    function validate() {
        if (username.value === "") {
           
            username.style.border = "3px solid red"; 
            document.getElementById("lbluser").style.visibility = "visible";
            return false;
        }
        else if(email.value==""){
            email.style.border = "3px solid red"; 
            document.getElementById("lblemail").style.visibility = "visible";
            return false;
        }
        else if(password.value==""){
            password.style.border = "3px solid red"; 
            document.getElementById("lblpass").style.visibility = "visible";
            return false;
        }
        else if(password.value.length<6){
                alert("password too short");
            //     // password.style.border = "3px solid red";
               
                return false;
        }
        else if(number.value==""){
            number.style.border = "3px solid red"; 
            document.getElementById("lblnumber").style.visibility = "visible";
            return false;
        }
        else if(number.value.length<6){
                alert("It is not a valid number");
            //     // password.style.border = "3px solid red";
               
                return false;
        }

        
        return true;
    }
