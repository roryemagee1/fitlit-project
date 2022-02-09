// Your fetch requests will live here!
const userData = () => {
  return fetch('https://fitlit-api.herokuapp.com/api/v1/users')
  .then((response => response.json())
  .then((data) => data)
  .catch((err) => console.log('ERROR')))
}

console.log('I will be a fetch request!')
