let sayHello = function(name){
	console.log("Hey!");
	console.log(`Whats up ${name}`);
}


sayHello('Basak')


let myAdder = function(num1, num2){
	let sum = num1 + num2;
	return sum;
}


console.log(myAdder(10,20));


let s = null;
console.log(s)


let def = function(name = 'NONE'){
	console.log('Hey! '+name);
}

def('Basak')
def()