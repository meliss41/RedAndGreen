
function setBackgoundColor(mySquare, color)
{
document.getElementById("mySquare").style.backgroundColor= color;
};


setBackgoundColor('mySquare', 'red');

var col = getComputedStyle(document.getElementById("mySquare")).backgroundColor;
if(col === "rgb(0, 128, 0)")
{
	alert("success");
}
else
{
	alert("failure");
	//document.getElementById("mySquare").style.backgroundColor = "red";
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

