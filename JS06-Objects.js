let emp = {
	name: "Suvam Basak",
	empid: 6313131,
	projectid: "929jsuts3",
	salary: 30000
}

console.log(emp)

console.log(`Employee name is ${emp.name}, working on ${emp.projectid}`)

emp.projectid = '007'
console.log(emp)

let inr = function(obj){
	obj.salary = obj.salary+1000
}

inr(emp)
console.log(emp)