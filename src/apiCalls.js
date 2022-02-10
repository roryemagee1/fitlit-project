// Your fetch requests will live here!
const getUserData = () => {
  return fetch('https://fitlit-api.herokuapp.com/api/v1/users')
  .then(response => response.json())
  .then(data => data.userData)
  .catch(err => console.log('ERROR'))
}

const getHydrationData = () => {
  return fetch('https://fitlit-api.herokuapp.com/api/v1/hydration')
  .then(response => response.json())
  .then(data => data.hydrationData)
  .catch(err => console.log('ERROR'))
}

const getSleepData = () => {
  return fetch('https://fitlit-api.herokuapp.com/api/v1/sleep')
  .then(response => response.json())
  .then(data => data.sleepData)
  .catch(err => console.log('ERROR'))
}

// const userData = () => {
//   return Promise.all([
// 	getUserData,
// 	getHydrationData,
// 	getSleepData,
// ]).then(data => {
//   newRepo = new UserRepository(data[0])
//   newUser = new User(newRepo.allData[0][1])
// })
// }

export default {getUserData, getSleepData, getHydrationData};
console.log('I will be a fetch request!')
