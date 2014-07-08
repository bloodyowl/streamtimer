# stream-timer

[![browser support](https://ci.testling.com/bloodyowl/streamtimer.png)](https://ci.testling.com/bloodyowl/streamtimer)

## install

```sh
$ npm install bloody-streamtimer
```

## require

```javascript
var timer = require("bloody-streamtimer")
```

## api

### `timer(duration=0) > stream`

creates a timer that emits data from `0` to `1` while running the timer.

## example

```javascript
timer(300)
  .pipe(stream.create(curr){
    element.style.top = String(curr * -100) + "%"
  })
  .on("end", function(){
    element.style.visibility = "hidden"
  })
```
