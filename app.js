var button = document.getElementById("enter"); 
var input  = document.getElementById("userinput"); 
var ul	   = document.querySelector("ul"); 

// finds input length 
function inputLength() {
	return input.value.length; 
}

// grabbing text from input to be attached to <li> of <ul> 
function creatListElement() {
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = ""; 
}

// if input is NOT empty, run creatListElement function
function addListAfterClick() {
	if (inputLength() > 0){
		creatListElement(); 
	}
}

// if input is NOT empty and Enter is pressed run creatListElement function 
function addListAfterKeypress(e) {
	if (inputLength() > 0 && e.keyCode === 13){
	creatListElement(); 
	}
}

// when button is clicked run addListAfterClick function 
button.addEventListener("click", addListAfterClick); 

// when a key is pressed run addListAfterKeypress function  
input.addEventListener("keypress", addListAfterKeypress); 