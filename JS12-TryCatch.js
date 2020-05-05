const toRs = (euro) => {
	if(typeof euro === 'number'){
		return euro * 81
	}else{
		throw Error('Only numbers')
	}
}


try{
	console.log(toRs(5))
	console.log(toRs('five'))
}catch(error){
	console.log(error)
}

console.log('Hello')