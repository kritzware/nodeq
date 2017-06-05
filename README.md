# nodeq

### Usage:
Currently not released as an NPM package. If you wish to run the examples below, they are already setup in `test.js`

### Example:

```javascript
onst nodeq = require('nodeq')

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

for(let i = 0; i < 1000; i++) {
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
```