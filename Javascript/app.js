



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
    function checkValidation(){
        let email = ["asadullah", "badshah", "Kings"]
        let password = ["123", "456", "789"]
        
        let useremail = document.getElementById("email").value ;
        let userpassword = document.getElementById("password").value ;

        for(i=0; i<email.length; i++){
            if(useremail != email[i]){
                alert("BY")
            }
        }
    }