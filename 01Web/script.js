// alert('working')

// console.log(document)

// console.log(document.head)
// console.log(document.body)


// console.log(document.title)

document.title = 'Web App';

// console.log(document.getElementById('idone'));
// console.log(document.getElementByClassName('classone'));

// const myElement = document.querySelector('p')
// console.log(myElement)

// const myElement = document.querySelectorAll('p')
// console.log(myElement)
// console.log(myElement[0])


// const myElement1 = document.querySelectorAll('#idone')
// console.log(myElement1[0])

// const myElement2 = document.querySelectorAll('.classone')
// console.log(myElement2[0])


// // Chnage text
// const pelem = document.querySelector('p')
// // console.log(pelem)
// pelem.textContent = 'JS changed me'

const allPElement = document.querySelectorAll('p')
// allPElement.forEach(function(p){
// 	p.textContent = 'Chnaged!!'
// })

allPElement.forEach((p) => p.textContent = 'Arrow')


// Adding element
const newPara = document.createElement('p')
newPara.textContent = 'I was added by JS.'

document.querySelector('body').appendChild(newPara)


//Event
document.querySelector('button').addEventListener('click',(event) => {
	// alert('Button pressed')
	event.target.textContent = 'I was clicked!'
})

document.querySelector('#key').addEventListener('input',(event) => {
	console.log(event.target.value)
})