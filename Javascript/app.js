

        // Navbar Javascript Function

    function menuOn(){
        let menulist = document.getElementById("menuList").style.display = "flex";
        let oN = document.getElementById("menuOn").style.display = "none";
        let oFf = document.getElementById("menuOff").style.display = "flex";
    }
    function menuOff(){
        let menulist = document.getElementById("menuList").style.display = "none";
        let oN = document.getElementById("menuOn").style.display = "flex";
        let oFf = document.getElementById("menuOff").style.display = "none";
    }

        // User Credential Array

        let email = ["asadullah", "badshah", "Kings"]
        let password = ["123", "456", "789"]

        // Login Function

    function checkValidation(){
        let email = ["asadullah", "badshah", "Kings"]
        let password = ["123", "456", "789"]
        
        let useremail = document.getElementById("email").value ;
        let userpassword = document.getElementById("password").value ;
        
        let emailCheck = !email.includes(useremail);
        console.log(emailCheck)
        let passwordCheck = !password.includes(userpassword);

        if(email.includes(useremail) && password.includes(userpassword)){
            true
            document.getElementById("login").href = "./main.html"
        }
        else{
            if(emailCheck == true){
                document.getElementById("erroremail").style.display = "flex"
            }

            if(passwordCheck == true){
                document.getElementById("errorpassword").style.display = "flex"
            }
        }

        // Changing Login and Signup card Function        
        
    }

    function newAccount(){
        document.getElementById("loginform").style.display = "none"
        document.getElementById("signupform").style.display = "flex"
    }
    function login(){
        document.getElementById("loginform").style.display = "flex"
        document.getElementById("signupform").style.display = "none"
    }

    // function signupUser(){
    //     let usernameSignup = document.getElementById("usernamesignup").value;
    //     let signupPassword = document.getElementById("passwordsignup").value;
    //     let userFatherNameSignup = document.getElementById("fathernamesignup").value;
    //     let emailSignup = document.getElementById("emailsignup").value;
    //     email.push(usernameSignup);
    //     password.push(signupPassword);
    // }
























