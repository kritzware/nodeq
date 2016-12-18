const nodeq = require('./index.js')
const Node = require('./Node.js')
const util = require('util')

let Queue = new nodeq.Q()
let Worker = new nodeq.Worker()

function success() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log({name: 'successful job', res: 'result'})
			resolve()
		}, 2000)
	})
}

function bad() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log({name: 'bad job', res: 'result'})
			reject('job error')
		}, 2000)
	})
}

Queue.addJob(success, 1)
Queue.addJob(bad, 2)
Queue.addJob(success, 3)

// Queue.run((err, done) => {
// 	if(done) {
// 		console.log('finished all')
// 	}
// })

Worker.define('test_worker', {
	jobs: Queue,
	every: '* * * * *'
})

Worker.start((err, res, done) => {
	if(done) {
		console('all jobs done, waiting until next event')
	}
})

// Queue.display()

// Queue.run()

// console.log(Worker)

// setInterval(function() {
// 	console.log(util.format("Memory usage: %dMB", ((process.memoryUsage().rss / 1024) / 1024).toFixed(1)));
// }, 5000)