const NodeQ = require('./index.js')

const api_queue = new NodeQ()

api_queue.addJob('wasd')

// const nodeq = new require('./index')()

// nodeq.addJob('get_api_data', (err, job, res) => {
	
// 	getApiData()
// 	.catch((err) => {
// 		console.log(err)
// 	})
// 	.then(() => {
// 		console.log('job complete')
// 		job.done()
// 	})
// })

// nodeq.start({get_api_data: '0 3 * * *'})

// function getApiData() {
// 	return new Promise((fulfill, reject) => {
// 		setTimeout(() => {
// 			fulfill('api job done')
// 		}, 2000)
// 	})
// }