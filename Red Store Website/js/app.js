var menuItems = document.getElementById("menuItems");

menuItems.style.maxHeight = "0px";

function menuToggle()
{
    if(menuItems.style.maxHeight =="0px")
    {
        menuItems.style.maxHeight = "200px"
    }
    else{
        menuItems.style.maxHeight = "0px"
    }
}

// JS for toggle form

var LoginForm = document.getElementById("loginForm");
var RegForm = document.getElementById("regForm");
var Indicator = document.getElementById("Indicator");

function register()
{
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}
function login()
{
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}