function doSomething(value) {
    return new Promise((resolve, reject) => {
        resolve(value)
    })
}

async function somethingElse(value) {
    let x = await doSomething(value)
    console.log(x)
}


somethingElse(5)
