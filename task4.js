
function red (){
	document.getElementById("green").style.backgroundColor = "red";
	var elem = document.getElementById("button");
	if(elem.innerHTML === "Make Red"){
		elem.innerHTML = "Make Green";
	}
	else{
		elem.innerHTML = "Make Red";
		document.getElementById("green").style.backgroundColor = "green";
	}
}

