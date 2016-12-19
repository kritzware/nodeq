# nodeq

### Usage:
Currently not released as an NPM package. If you wish to run the examples below, they are already setup in `test.js`

### Example:

```javascript
const nodeq = require('nodeq')
const Queue = new nodeq.Queue()
const Worker = new nodeq.Worker()

/* Add jobs (id parameter is only for testing) */
Queue.addJob(success, 1)
Queue.addJob(bad, 2)
Queue.addJob(success, 3)

/* Display jobs in queue */
Queue.display()

/* Start the queue and run jobs */
Queue.run()

/* Alternatively, schedule the queue to run at a set time by defining a worker */
Worker.define('test_worker', {
	jobs: Queue,
	every: '* * * * *'
})

/* Start the worker and listen for the completion event */
Worker.start((err, res, done) => {
	if(done) {
		console('all jobs done, waiting until next event')
	}
})

/* Example Promise functions used above */
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
```
