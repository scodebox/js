const stud = {
	name: 'Suvam basak',
	age: 23,
	isActive: true
}

//convert to string
const stud_str = JSON.stringify(stud)
console.log(stud_str)

localStorage.setItem('student',stud_str)

const stud_json = JSON.parse(stud_str)

console.log(stud_json)

console.log(stud_json.age)
console.log(stud_json.name)