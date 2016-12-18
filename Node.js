'use strict'

let method = Node.prototype;

function Node(data, next, x) {
	this.data = data
	this.next = next
	this.x = x
}

Node.display = (head) => {
	let current = head
	while(current.next !== null) {
		current = current.next
		console.log(current.data)
	}
}

module.exports = Node