var dbms = {
	name: 'Database Management System',
	page: 1230,
	author: 'Korth'
}

var os = {
	name: 'Operating Systems Concept',
	page: 530,
	author: 'Galvin'
}

var cn = {
	name: 'Networking and Data Communication',
	page: 1260,
	author: 'Frozen'
}


let books = new Map()

// console.log(typeof books)

books.set('dbms',dbms)
books.set('os',os)
books.set('cn',cn)

console.log('BOOK')
console.log(books)

console.log('BOOK SIZE')
console.log(books.size)

console.log('BOOK GET')
console.log(books.get('os'))

console.log('BOOK KEYS')
console.log(books.keys())

console.log('BOOK VALUES')
console.log(books.values())

console.log('------------------------------')

for(const key of books.keys()){
	console.log(key)
}

console.log('------------------------------')

for(const values of books.values()){
	console.log(values.name)
}

console.log('------------------------------')

for(const [key, value] of books.entries()){
	// console.log(`${key} -> ${value.name}`)
	console.log(key + ' = ' + value.page)
}

console.log('------------------------------')

books.forEach((value,key) => console.log(key + ' = ' + value.page))


console.log('==============================================')

let arrofarr = [['one', 1], ['two', 2], ['three', 3]]
let newMap = new Map(arrofarr)
console.log(newMap)

for(let key of newMap.keys()){
	console.log(key)
}

for(let value of newMap.values()){
	console.log(value)
}

for(let [key,value] of newMap.entries()){
	console.log(key + ' -> ' + value)
}