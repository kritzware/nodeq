const nodeq = require('./index.js')
const Node = require('./Node.js')

const Q = new nodeq()

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

Q.addJob(success, 1)
Q.addJob(bad, 2)
Q.addJob(success, 3)

Q.display()

Q.run()