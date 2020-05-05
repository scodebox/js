const days = ['Mon','Tue','Wed','Thr','Fry','Sat']

let show = function(){
	console.log('Hello!')
}

days.forEach(show)

days.forEach(function(i){
	console.log(i)
})

days.forEach(function(i,index){
	console.log(`${index} -> ${i}`);
})


console.log('---------------------------------------------------')


for(let i=0;i<days.length;i++){
	console.log(days[i]);
}

console.log('---------------------------------------------------')


const todos = []

todos.push("Go gym1")
todos.push("Go gym2")
todos.push("Go gym3")

todos.forEach(function(todo,index){
	console.log(`Your Task ${index+1} is : ${todo}`)
})



for(let i=todos.length-1;i>=0;i--){
	console.log(todos[i])	
}