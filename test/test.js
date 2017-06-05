const nodeq = require('../index')

const Queue = new nodeq.Queue()

function successJob() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('successJob done')
      resolve()
    }, 2000)
  })
}

function errorJob() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      reject(new Error('bad_job_err'))
    }, 2000)
  })
}

// for(let i = 0; i < 2; i++) {
//   Queue.addJob('some_task', async done => {
//     await successJob()
//     done()
//   })
// }

for(let i = 0; i < 10; i++) {
  const random = Math.round(Math.random())
  Queue.addJob('some_task', async done => {
    if(random) {
      await successJob()
      done()
    } else {
      await errorJob()
      done()
    }
  })
}

Queue.start('* * * * *')

Queue.on('error', (job, err) => {
  console.log(err)
})

/*

const nodeq = require('nodeq')

const Queue = new nodeq.Queue()
const Worker = new nodeq.Worker()

Queue.addJob('* * * * *', done => {

})

Worker.start(Queue)

Worker.on('error', err => {

})

Worker.on('start', () => {

})

*/