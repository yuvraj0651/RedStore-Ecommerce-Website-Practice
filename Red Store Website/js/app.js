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

//js for product gallary

var ProductImg = document.getElementById("productImg");
var SmallImg = document.getElementsByClassName("smallImg");

SmallImg[0].onclick = function()
{
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function()
{
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function()
{
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function()
{
    ProductImg.src = SmallImg[3].src;
}