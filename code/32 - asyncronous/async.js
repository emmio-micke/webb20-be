function doSomething(value) {
    return new Promise((resolve, reject) => {
        resolve(value)
    })
}

async function somethingElse() {
    let x = await doSomething(5)
    console.log(x)

    let y = doSomething(8)
        .then(value => {
            console.log(value)
        })
}


somethingElse()
