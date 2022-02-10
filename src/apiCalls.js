// Your fetch requests will live here!
const getUserData = fetch('https://fitlit-api.herokuapp.com/api/v1/users').then(response => response.json());

const getHydrationData = fetch('https://fitlit-api.herokuapp.com/api/v1/hydration').then(response => response.json());

const getSleepData = fetch('https://fitlit-api.herokuapp.com/api/v1/sleep').then(response => response.json());



export {getUserData, getSleepData, getHydrationData};

console.log('I will be a fetch request!')
