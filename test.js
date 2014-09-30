var test = require('tape')
var daub = require('./')

test('single function', function(t) {
  t.plan(5)

  var n = 0

  daub(function() {
    t.pass('step ' + n++)
    return n < 5
  })
})

test('three functions', function(t) {
  var ns = [0, 0, 0]

  t.plan(2 * 3 * 5)

  for (var i = 0; i < 3; i++) (function(i) {
    var n = 0

    daub(function() {
      var n = ++ns[i]

      for (var j = 0; j < 3; j++) {
        if (i === j) continue
        t.equal(ns[j], i > j ? ns[i] : ns[i] - 1)
      }

      return n < 5
    })
  })(i)
})
