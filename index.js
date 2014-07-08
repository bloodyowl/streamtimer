var stream = require("bloody-stream")
var animationFrame = require("bloody-animationframe")

module.exports = function(duration){
  var timer = stream.create()
  var duration = typeof duration == "number" && !isNaN(duration) ? duration : 0
  var start = +new Date()
  var end = start + duration
  function cb(){
    var currTime = +new Date()
    if(currTime >= end) {
      timer.end(1)
      return
    }
    timer.write((currTime - start) / duration)
    animationFrame.requestAnimationFrame(cb)
  }
  animationFrame.requestAnimationFrame(cb)
  return timer
}
