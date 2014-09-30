var raf  = require('raf')
var curr = []
var next = []

module.exports = dauber

function dauber(fn) {
  curr[curr.length] = fn
  if (curr.length >= 2) return
  raf(loop)
}

function loop() {
  var l = curr.length
  var j = 0

  for (var i = 0; i < l; i++) {
    var step = curr[i]
    if (step() !== false) {
      next[j++] = step
    }
  }

  var tmp = curr
  curr = next
  next = tmp
  next.length = 0

  if (curr.length) raf(loop)
}
