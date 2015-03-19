 var rg = new RedOrGreen("myElement");

   rg.makeGreen();
   // myElements backgound color should be green now
if(document.getElementById("myElement").style.backgroundColor === "green")
{
		alert("Color is green");
} 
else
{
		alert("Color is not green");
}

   rg.makeRed();
   // myElements backgound should be red now
if(document.getElementById("myElement").style.backgroundColor === "red"){
		alert("Color is red");
} 
else{
		alert("Color is not red");
}



 

