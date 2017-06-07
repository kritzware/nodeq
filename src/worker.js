"use strict"

const crypto = require('crypto')
const events = require('events')
const redis = require('redis')

const Job = require('./job')

const Worker = class {

  constructor({
    host='127.0.0.1',
    port=6379
  }) {
    this.redis = { host, port }
    this.redis.client = this.createRedisClient(host, port)
    events.EventEmitter.call(this)
  }

  createRedisClient(host, port) {
    return redis.createClient({ host, port })
  }

  addJob({
    name,
    interval,
    timeout=6000
  }, method) {
    const job = new Job({ name, interval, method, timeout })
    const n = job.getNextOccurence()
    const milliseconds_to_next_run = n - new Date()
    console.log(n)
    console.log(milliseconds_to_next_run)
  }

  completedJob() {
    this.job = true
  }

  async start() {



    // console.time('jobs')
    // for(const job of this.jobs) {
    //   try {
    //     await job.method(this.completedJob.bind(job))
    //   } catch(err) {
    //     // console.log(err)
    //     this.emit('error', job, err)
    //     job.retry = true
    //   }
    // }
    // console.timeEnd('jobs')
    // console.time('remove_completed')
    // this.jobs = this.jobs.filter(j => j.retry)
    // console.timeEnd('remove_completed')
    // // console.log(this.jobs)
  }

}

Worker.prototype.__proto__ = events.EventEmitter.prototype

module.exports = Worker