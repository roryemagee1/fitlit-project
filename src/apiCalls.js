// Your fetch requests will live here!
const getUserData = fetch('https://fitlit-api.herokuapp.com/api/v1/users').then(response => response.json());
//   .then(response => response.json())
//   .then(data => data.userData)
//   .catch(err => console.log('ERROR'))
// }

const getHydrationData = fetch('https://fitlit-api.herokuapp.com/api/v1/hydration').then(response => response.json());
//   .then(response => response.json())
//   .then(data => data.hydrationData)
//   .catch(err => console.log('ERROR'))
// }

const getSleepData = fetch('https://fitlit-api.herokuapp.com/api/v1/sleep').then(response => response.json());
//   .then(response => response.json())
//   .then(data => data.sleepData)
//   .catch(err => console.log('ERROR'))
// }

// Promise.all([getUserData, getHydrationData, getSleepData])
// .then(files => {
//   files.forEach(file => {
//     process(file.json());
//   })
// })
//   .catch(err =>{
//
//   });
//
// let process = prom => {
//   prom.then(data => {
//
//   })
// }

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

export {getUserData, getSleepData, getHydrationData};

console.log('I will be a fetch request!')
