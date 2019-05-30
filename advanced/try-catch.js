const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * 0.25
    } else {
        throw Error('Argument must be a number')
    }
}

try {
    const result = getTip(10)
    console.log(result)
} catch (e) {
    console.log('catch block is running')
}

const getTip = (amount) => {
    if (typeof amount !== 'number') {
        throw Error('Argument must be a number')
    } 

    return amount * 0.25
}

try {
    const result = getTip(10)
    console.log(result)
} catch (e) {
    console.log('catch block is running')
}
