function setBackgoundColor(mySquare, color)
{
document.getElementById("mySquare").style.backgroundColor= color;
}

// change the background to green
setBackgroundColor('mySquare', 'green'){
//test to see if the background changed to green
if(document.getElementById("mySquare").style.backgroundColor === "green")
{
	alert("success");
}
else
{
	alert("failure");
}
}

