"use strict"

const crypto = require('crypto')
const events = require('events')

const Job = require('./job')

const Queue = class {

  constructor() {
    this.jobs = []
    events.EventEmitter.call(this)
  }

  addJob(name, method) {
    // const job = new Job({ interval, method })
    // console.log(job)
    this.jobs.push({
      id: crypto.randomBytes(8).toString('hex'),
      name,
      method,
      done: false,
      retry: false
    })
  }

  completedJob() {
    this.job = true
  }

  async start(interval) {
    console.time('jobs')
    for(const job of this.jobs) {
      try {
        await job.method(this.completedJob.bind(job))
      } catch(err) {
        // console.log(err)
        this.emit('error', job, err)
        job.retry = true
      }
    }
    console.timeEnd('jobs')
    console.time('remove_completed')
    this.jobs = this.jobs.filter(j => j.retry)
    console.timeEnd('remove_completed')
    // console.log(this.jobs)
  }

}

Queue.prototype.__proto__ = events.EventEmitter.prototype

module.exports = Queue