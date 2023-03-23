function vis()
{
   document.getElementById("a").removeAttribute("type")
   document.getElementById("b").setAttribute("src","visible.png")
}
function hid()
{
    document.getElementById("b").setAttribute("src","hide.png")
    document.getElementById("a").setAttribute("type","password")
}
function auth()
{
    var password="123"
    var email="example@gmail.com"
    var userpass = document.getElementById("a").value
    var useremail = document.getElementById("email").value 
    if(useremail==email && userpass==password)
    {
        document.getElementById("bg").setAttribute("src","Home.html");
        document.getElementById("result").innerHTML=" ";
        document.getElementById("email").style.borderColor="royalblue";
        document.getElementById("cont").style.borderColor="royalblue";
    }
    else if(useremail!=email && userpass==password)
    {
        document.getElementById("email").style.borderColor="red";
        document.getElementById("cont").style.borderColor="royalblue";
        document.getElementById("result").innerHTML="Enter valid Email"
        document.getElementById("bg").style.backgroundImage="linear-gradient(90deg, red, white)";
    }
    else if(useremail==email && userpass!=password)
    {
        document.getElementById("cont").style.borderColor="red";
        document.getElementById("email").style.borderColor="royalblue";
        document.getElementById("result").innerHTML="Enter valid password"
        document.getElementById("bg").style.backgroundImage="linear-gradient(90deg, white, red)";
    }
    else 
    {
        document.getElementById("email").style.borderColor="red";
        document.getElementById("cont").style.borderColor="red";
        document.getElementById("result").innerHTML="Enter valid Email and password";
        document.getElementById("bg").style.backgroundImage="linear-gradient(90deg, tomato, red)"
    }
}