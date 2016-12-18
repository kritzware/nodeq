'use strict'
const Node = require('./Node.js')

let _this

function NodeQ(options) {
	_this = this
	this.options = options
	this.head = new Node('head', null, null)
}

NodeQ.prototype.addJob = (job, x) => {
	console.log('adding job')
	if(_this.head.next !== null) {
		let _next = _this.head.next
		_this.head.next = new Node(job, _next, x)
	} else {
		_this.head.next = new Node(job, null, x)
	}
}

NodeQ.prototype.run = () => {
	let current = _this.head.next
	let chain = Promise.resolve()

	while(current !== null) {
		chain = chain.then(current.data)
		.catch((err) => {
			console.log(err)
		})
		current = current.next
	}
}

NodeQ.prototype.display = () => {
	let current = _this.head.next

	while(current !== null) {
		console.log('job key -> ' + current.x)
		current = current.next
	}	
}

module.exports = NodeQ