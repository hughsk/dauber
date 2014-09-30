# dauber [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Pooled requestAnimationFrame wrapper, designed for short bursts of animation as
opposed to a constant loop. Useful for DOM/SVG-based animations where CSS
transitions aren't applicable.

## Usage

[![NPM](https://nodei.co/npm/dauber.png)](https://nodei.co/npm/dauber/)

### `dauber(loopfn)`

Calls `loopfn` each frame, until the function returns `false`.

For example, to run an animation for five frames:

``` js
var dauber = require('dauber')
var el = document.getElementById('el')
var n = 0

dauber(function() {
  el.setAttribute('d', 'some SVG path value')
  return ++n < 5
})
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/dauber/blob/master/LICENSE.md) for details.
