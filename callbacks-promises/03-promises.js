let promise = new Promise((resolve, reject) => {
  const result = Math.random
  if (result > 0.5) {
      resolve(result)
  } else {
      reject()
  }
})

promise.then(
    (value) => { console.log(`resolved to ${value}`) },
    () => { console.log('rejected') }    
)