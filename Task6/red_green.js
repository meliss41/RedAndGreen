
function RedOrGreen(myElement)
{
	this.makeGreen = function()
	{
	document.getElementById("myElement").style.backgroundColor = "green";
	};
	this.makeRed = function()
	{
	document.getElementById("myElement").style.backgroundColor = "red";
	};
}

