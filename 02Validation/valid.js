function checkNum(){
	let n = document.getElementById('num').value;
	if((isNaN(n)) || (n < 1) || (n > 20)){
		alert('Wrong!')
	}else{
		console.log('corrct')
	}
}


document.querySelector('.myForm').addEventListener('submit',(event) => {
	event.preventDefault();
	console.log(event.target.username.value);
	event.target.username.value = '';
})