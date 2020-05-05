// const sayHello = function(name){
// 	return 'Hello there, ' + name + ' !'
// }
// console.log(sayHello('Basak'))


const sayHello1 = (name) => {
	return `Hello there, ${name} !`
}
console.log(sayHello1('Basak'))



const sayHello2 = (name) => `Hello there, ${name} !`
console.log(sayHello2('Roy'))

const newList = [{
	title: 'Coding',
	isDone: false,
},{
	title: 'Complete Project',
	isDone: false,
},{
	title: 'Work out',
	isDone: true,
}]

const thingsNotDone = newList.filter((todo) => todo.isDone === false)
console.log(thingsNotDone)