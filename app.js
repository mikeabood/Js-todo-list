var button = document.getElementById("enter"); 
var input  = document.getElementById("userinput"); 
var ul	   = document.querySelector("ul"); 

var strike = document.getElementById("strike"); 

// finds input length 
function inputLength() {
	return input.value.length; 
}

// grabbing text from input to be attached to <li> of <ul> 
function creatListElement() {
	var li = document.createElement("li"); 
	var delCheck = document.createElement("input"); 
	delCheck.setAttribute("type", "checkbox"); 
	delCheck.setAttribute("class", "fire"); 
	li.appendChild(delCheck);  
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = ""; 
}

// function deleteListElement() {
// 	var myInp = document.querySelector("input");
// 	if(li.checked) {
// 		this.li.remove(); 
// 	} 
// }

function myAlert() {
	return alert("Please enter an item!"); 
}

// if input is NOT empty, run creatListElement function
function addListAfterClick() {
	if (inputLength() > 0){
		creatListElement(); 
	} else { myAlert() }
}

// if input is NOT empty and Enter is pressed run creatListElement function 
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13){
	creatListElement(); 
	}
}

function crossThru(){
	return strike.classList.toggle("done");
	
}

// when button is clicked run addListAfterClick function 
button.addEventListener("click", addListAfterClick); 
// when a key is pressed run addListAfterKeypress function  
input.addEventListener("keypress", addListAfterKeypress); 

// strike.addEventListener("dblclick", function() {
// 	strike.classList.toggle("done");  
// }); 
strike.addEventListener("dblclick", crossThru); 



// var button = document.getElementsByTagName("button")[0]; 
// button.addEventListener("click", function(e){
// 	console.log(e.which); 
// 	var li = document.createElement("li"); 
// 	li.appendChild(document.createTextNode(input.value)); 
// 	ul.appendChild(li); 
// 	input.value = ""; 

// })
