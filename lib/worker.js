'use strict'

const later = require('later')

let _this

function Worker() {
	_this = this
	this.name = ''
	this.jobs = null
	this.every = ''
}

Worker.prototype.define = (name, conf) => {
	_this.name = name
	_this.jobs = conf.jobs
	_this.every = conf.every
}

Worker.prototype.start = (callback) => {

	let sched = later.parse.cron(_this.every)
	let next = later.schedule(sched).next(1)

	console.log('job to run at ' + next.toString())

	Worker.prototype.countdown(next, (err, found) => {
		if(found) {
			console.log('job scheduled to start now')
			_this.jobs.run((err, done) => {
				if(done) {
					console.log('all jobs done')
					process.exit(0)
				}
			})
		}
	})

}

Worker.prototype.countdown = (next, cb) => {
	setInterval(function() {
		let current = new Date()
		let upper = current.setSeconds(current.getSeconds() + 5)
		let lower = current.setSeconds(current.getSeconds() - 5)

		if(next <= upper && next >= lower) {
			return cb(null, new Date())
		}
	}, 5000)
}

module.exports = Worker