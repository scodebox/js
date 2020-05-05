var ul = document.getElementById('list');
var li;
var addButton = document.getElementById('add');
var removeButton = document.getElementById('remove');
var removeAllButton = document.getElementById('removeall');

addButton.addEventListener('click',addItem);
removeButton.addEventListener('click',removeItem);
removeAllButton.addEventListener('click',removeAllItem);

function addItem(){
	document.getElementById('emptyinput').innerHTML = '';
	var input = document.getElementById('input');
	var item = input.value;
	var textNode = document.createTextNode(item);
	ul = document.getElementById('list');
	if(item === ''){
		//,method 1
		// var emp = document.getElementById('emptyinput');
		// var empTextNode = document.createTextNode('Hey! Textbox is empty!');
		// emp.appendChild(empTextNode);

		//method 2
		document.getElementById('emptyinput').innerHTML = 'Hey! Textbox is empty!';

		return false;
	} else {
		//create li
		li = document.createElement('li');

		//create checkbox
		var checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.setAttribute('id','check');

		//create label
		var label = document.createElement('label');

		ul.appendChild(label);
		li.appendChild(checkbox);
		label.appendChild(textNode);
		li.appendChild(label);
		ul.insertBefore(li,ul.childNodes[0]);
		

		setTimeout(()=>{
			li.className = 'visual';
		}, 300);

		input.value = '';
	}
}

function removeItem(){
	console.log('removeButton clicked');
	li = ul.children;
	for (let i=0; i< li.length; i++) {
		while(li[i] && li[i].children[0].checked){
			ul.removeChild(li[i]);
		}
	}
}

function removeAllItem(){
	console.log('remove ALL Button clicked');
	li = ul.children;
	while(li.length){
		ul.removeChild(li[0]);
	}
}