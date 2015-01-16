// Your code here
window.addEventListener("load", function() {
	changeGreeting();
	turnYellow();
	selectLink();
	resetClass ();

});
//everything needs to be in this window

function changeGreeting() {
	document.getElementById("greeting").innerHTML = "Hello Plant Earth!";
}
function turnYellow() {
	var listItems = document.getElementById("essentials").getElementsByTagName("li");
	for (i=0; i<listItems.length; i++) {
		listItems[i].style.backgroundColor = "yellow";
	}

	//document.getElementsByTagName("li").backgroundColor = "yellow";	
}
function selectLink() {
	var listItems = document.getElementById("essentials").getElementsByTagName("li");
	for (i=0; i<listItems.length; i++) {
		listItems[i].addEventListener("click", function(e){
			e.target.setAttribute("class", "selected");
			
			document.querySelector("img").setAttribute("src", "./images/" + e.target.innerHTML + ".jpeg")
		});
	}
}

function resetClass () {
	document.getElementById("reset").addEventListener("click", function (){
		var listItems = document.getElementById("essentials").getElementsByTagName("li");
		for (i=0; i<listItems.length; i++){
			listItems[i].setAttribute("class", " ");
		} 
		document.querySelector("img").setAttribute("src", "./images/panic.jpeg")
	});
}
