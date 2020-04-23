var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");

//finding length of the item user added
function inputLength(){
	return input.value.length;
}

//creating new item in the list
function createListElement(){
	var li = document.createElement("li");
	var icon = document.createElement("icon");
		li.appendChild(document.createTextNode(input.value));
		li.classList.add("listprop"); // adding CSS class for li element
		icon.innerHTML = '<i class="fa fa-close"></i>';
		icon.classList.add("listpropicon");// adding CSS class for icon
		ul.appendChild(li);
		li.appendChild(icon);
		li.onclick = addDoneClass;
		icon.onclick = removeItem;
		input.value = "";
}

//function for adding item after clicking add button
function addListAfterClick(){
	if(inputLength() > 0){
		createListElement();
	}
}

//function for adding item after pressing enter key
function addListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}

//function to remove the item when close icon is pressed.
function removeItem(event){
	event.target.parentElement.parentElement.remove();
}

//function to make a line on the item you have done
function addDoneClass(){
	var target = window.event.target;
	console.log(target);
	target.classList.toggle('done');
	return;
}

//adding event listener
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
