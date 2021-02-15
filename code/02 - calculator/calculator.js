let x = process.argv[2]
let sign = process.argv[3]
let y = process.argv[4]

if ('plus' === sign) {
    console.log(`${x} + ${y} = ${Number(x) + Number(y)}`)
}

if ('minus' === sign) {
    console.log(`${x} - ${y} = ${Number(x) - Number(y)}`)
}

if ('multiply' === sign) {
    console.log(`${x} * ${y} = ${Number(x) * Number(y)}`)
}

if ('divide' === sign) {
    console.log(`${x} / ${y} = ${Number(x) / Number(y)}`)
}
