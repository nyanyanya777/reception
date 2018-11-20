'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  Callname: '"https://script.google.com/macros/s/AKfycbwQKDeTB6tb-RZizRuF1WX1sR2n0Px-mA337sTyf_n0uCxDSw/exec"',
  Callname2: '"https://script.google.com/macros/s/AKfycbwQKDeTB6tb-RZizRuF1WX1sR2n0Px-mA337sTyf_n0uCxDSw/exec"',
})
