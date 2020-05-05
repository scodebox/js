const list = ['Coding','Complete Project','Work out']
console.log(list.indexOf('Coding'))
console.log('------------------------------')

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

// const index = newList.findIndex(function(l,index){
// 	return l.title === 'Coding'
// })
// console.log(index)


const find = function(list, title){
	const index = list.findIndex(function(item, index){
		return item.title.toLowerCase() === title.toLowerCase()
	})

	return index
}

console.log(find(newList,'work out'))