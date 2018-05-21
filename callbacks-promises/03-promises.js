let promise = new Promise((resolve, reject) => {
  const result = Math.random
  if (result > 0.5) {
      resolve(result)
  } else {
      reject()
  }
})
