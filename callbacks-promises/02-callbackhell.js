function error (message) {
  console.log(`error: ${message}`)
}

function doSomething(success, failure) {
  const result = Math.random()
  if (result > 0.5) {
    success(result)
  } else {
    failure(result)
  }
}

function doSomethingElse (value, success, failure) {
  (Math.random > 0.5) ? success(result) : failure(result)
}

doSomething(
    function(result) {
      doSomethingElse(value, 
        function(result){
          doSomethingNew(result, 
            function(){}, 
            error
          )
        },
        error
      )
    },
    error
)