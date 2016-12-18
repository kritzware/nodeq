# nodeq

### Example

```javascript
const nodeq = require('nodeq')
const queue = new nodeq()

/* Add jobs (id parameter is only for testing) */
queue.addJob(success, 1)
queue.addJob(bad, 2)
queue.addJob(success, 3)

/* Display jobs in queue */
queue.display()

/* Start the queue and run jobs */
queue.run()

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
