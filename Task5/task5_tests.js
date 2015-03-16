
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

