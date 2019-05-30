const products = [{ name: 'computer mouse'}]
const product = products[0]

// Truthy - values that resolve to true in boolean context
// Falsy - values that resolve to false in boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN

if (product) {
    console.log('Product is found')
} else {
    console.log('Product is not found')
}