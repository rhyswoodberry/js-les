function doSomething(callback) {
  let delay = 1500 //miliseconds
  let func = function() {
    let result = [1, 2, 3]
    console.log('doSomething()')
    callback(result)
  }
  console.log('start')
  setTimeout(func, delay)
}

let finished = function (result) {
  console.log(result)
  console.log('done')
}

doSomething(finished)

// doSomething(() => {
//   console.log'done'
// })