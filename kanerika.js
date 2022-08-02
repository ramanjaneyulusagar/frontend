function login()
{
	    var a=document.getElementById("i1").value
		var b=document.getElementById("i2").value
		if(a){
        window.open("kanerikapage.html");
}


}
function get()
{
var c=document.getElementById("i3").value
if(c)
	{

        document.write("new password is sent to registered mobile number");

       }
}


function newaccount()
{
var c=document.getElementById("i8").value
if(c)

	{
document.write("account is created please relogin to your new account"); 
}
}

function click()
{
document.location.reload(true);

}
window.onscroll = function() {myFunction()};

var header = document.getElementById("div5");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}