function stepOne(cb) {
  // do something
  cb()
}

function stepTwo(cb) {
  // do something
  cb()
}

stepOne(() => { console.log('finished') })