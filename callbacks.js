function stepOne(cb) {
  // do something
  stepTwo() 
  cb()
}

function stepTwo(cb) {
  // do something
  cb()
}

stepOne(() => { console.log('finished') })