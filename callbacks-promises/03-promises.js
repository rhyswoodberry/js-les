(function() {

    let promise = new Promise((resolve, reject) => {
        const result = Math.random
        if (result > 0.5) {
            resolve(result)
        } else {
            reject("You've done something wrong!")
        }
    })

    promise.then(
        (value) => { console.log(`resolved to ${value}`) },
        () => { console.log('rejected') }    
    )

    promise.then(
        (value) => { return value * 100 }
    )

})()