document.querySelector('#myform').addEventListener('submit',(event) => {
	let name = event.target.name.value
	let email = event.target.email.value
	let pwd = event.target.password.value
	let confpwd = event.target.confirmpassword.value
	
	if(name === ''){
		alert('Name is empty!')
	} else if((email === '') || (!email.includes('@')) || (!email.includes('.'))){
		alert('Check your email!')
	} else if(pwd != confpwd) {
		alert('Password is not matching!') 
	}
})