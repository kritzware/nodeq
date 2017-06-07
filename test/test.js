const nodeq = require('../index')

const Worker = new nodeq.Worker({
  host: '127.0.0.1',
  port: 6379
})

Worker.addJob({
  name: 'reload_non_paying_domains',
  interval: '* * * * *'
}, async done => {
  await successJob()
})

// const Queue = new nodeq.Queue()
// const Worker = new nodeq.Worker()

function successJob() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('successJob done')
      resolve()
    }, 2000)
  })
}

// function errorJob() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function() {
//       reject(new Error('bad_job_err'))
//     }, 2000)
//   })
// }

// for(let i = 0; i < 2; i++) {
//   Queue.addJob('some_task', async done => {
//     await successJob()
//     done()
//   })
// }

// for(let i = 0; i < 10; i++) {
//   const random = Math.round(Math.random())
//   Queue.addJob('some_task', async done => {
//     if(random) {
//       await successJob()
//       done()
//     } else {
//       await errorJob()
//       done()
//     }
//   })
// }

// Queue.start('* * * * *')

// Queue.on('error', (job, err) => {
//   console.log(err)
// })

// Worker.addJob('some_task', '* * * * *', async done => {
//   await successJob()
//   done()
// })

// Worker.addJob({
//   name: 'reload_non_paying_domains',
//   interval: '0 0,12 * * *',
//   timeout: 10000
// }, async (job, done) => {
//   const domain_ids = await getNonPayingUsers()
//   try {
//     await reloadDomains(domain_ids, 'low')
//     done()
//   } catch(err) {
//     done(err)
//   }
// })

// Worker.start()

// Worker.on('error', err => {

// })

// Worker.on('start', () => {

// })

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