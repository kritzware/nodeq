'use strict'

let method = NodeQ.prototype;

function NodeQ(options) {
	this.options = options
}

method.addJob = (job_name) => {
	console.log(job_name)
	// wasd
}

module.exports = NodeQ