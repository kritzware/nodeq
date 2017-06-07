"use strict"

const later = require('later')

const Job = module.exports = class {

  constructor({
    name,
    interval,
    method,
    timeout
  }) {
    this.name = name
    this.cron_interval = interval
    this.parsed_interval = this.parseInterval(interval)

    this.method = method
    this.timeout = timeout

    this.occurences = []
  }

  parseInterval(cron) {
    return later.parse.cron(cron)
  }

  getNextOccurence() {
    return later.schedule(this.parsed_interval).next()
  }

}