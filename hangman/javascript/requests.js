const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get puzzle')
  }
}

const getCountry = async (countryCode) => {
  const response = await fetch('http://restcountries.eu/rest/v2/all')
  
  if (response.status === 200) {
    const data = await response.json()
    return data.find((element) => element.alpha2Code === countryCode)
  } else {
    throw new Error('Unable to fetch the data')
  }
}

const getLocation = async () => {
  const response = await fetch('http://ipinfo.io/json?token=59ea9abef51d01')

  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('Unable to fetch the data')
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation()
  const countryCode = location.country
  return await getCountry(countryCode)
}



























