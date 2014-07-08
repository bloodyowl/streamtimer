var tape = require("tape")
var timer = require("..")

tape("timer", function(test){
  var index = -1
  var previousValue = 0
  timer(200)
    .on("data", function(value){
      ++index
      test.ok(value > 0 && value <= 1)
      test.ok(value > previousValue)
      previousValue = value
    })
    .on("end", function(){
      test.equal(previousValue, 1)
      test.ok(index > 0)
      test.end()
    })
})

tape("timer (0 duration)", function(test){
  var index = -1
  timer()
    .on("data", function(value){
      ++index
      test.equal(value, 1)
    })
    .on("end", function(){
      test.equal(index, 0)
      test.end()
    })
})
