class Employee{
	constructor(firstname, lastname, eid){
		this.firstname = firstname;
		this.lastname = lastname;
		this.eid = eid;
	}

	getFullName(){
		return `${this.firstname} ${this.lastname}`;
	}

	editName(newname){
		const temp = newname.split(' ');
		this.firstname = temp[0];
		this.lastname = temp[1];
	}

}


class Manager extends Employee{
	constructor(firstname, lastname, eid, dept){
		super(firstname, lastname, eid);
		this.dept = dept;
	}

	getFullName(){
		return `Hr, ${this.firstname} ${this.lastname}`;
	}
}

const e1 = new Employee('Suvam','Basak','2020003');
const e2 = new Employee();

const m1 = new Manager('Suvam','Basak','2020003','CS')

console.log(e1);
console.log(e2);
console.log(m1);


e1.editName('John Wick');
console.log(e1.getFullName());
console.log(m1.getFullName());