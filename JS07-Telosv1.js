let todo = {
	day: 'Monday',
	meetings: 3,
	meetingDone: 1,

	addMeeting: function(num){
		this.meetings = this.meetings + num
	},

	complete: function(num){
		this.meetingDone = this.meetingDone + num
	},

	summary: function(){
		return `DAY: ${this.day} Total meetings ${this.meetings}, completed ${this.meetingDone}.`
	},

	reset: function(){
		this.day = null
		this.meetings = 0
		this.meetingDone = 0
	},
}



console.log(todo)
todo.addMeeting(10)
console.log(todo)
todo.complete(5)
console.log(todo)
console.log(todo.summary())
todo.reset()
console.log(todo)