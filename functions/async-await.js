// When you put the 'async' keyword before defining your function's arguments,
// you make this function to work with the promise API. Whatever you choose to 
// return is going to be a resolved value.
const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000);
  });

const processData = async () => {
  let data = await getDataPromise('2')
  data = await getDataPromise(data)
  return data
}

processData().then(data => {
  console.log('Data:', data)
}).catch(error => {
  console.log('Error:', error)
})