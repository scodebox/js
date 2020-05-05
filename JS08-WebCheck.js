let userEmail = '123@abs.com'
let userPwd = '1n3enckjns4'

let pwdCheker = function(pwd){
	if(pwd.includes(123)){
		return false
	}
	if(pwd.length < 8){
		return false
	}
	return true
}


let emailChecker = function(mail){
	if(mail.includes('@') && mail.includes('.')){
		return true
	}
	return false
}

console.log(pwdCheker(userPwd))
console.log(emailChecker(userEmail))