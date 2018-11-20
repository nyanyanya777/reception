'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  Call_name: '"https://script.google.com/macros/s/AKfycbwQKDeTB"',
})
