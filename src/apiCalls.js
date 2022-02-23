// Your fetch requests will live here!
// const getUserData = () => {fetch('https://fitlit-api.herokuapp.com/api/v1/users').then(response => response.json())};

// const getHydrationData = () => {fetch('https://fitlit-api.herokuapp.com/api/v1/hydration').then(response => response.json())};

// const getSleepData = () => {fetch('https://fitlit-api.herokuapp.com/api/v1/sleep').then(response => response.json())};

// export {getUserData, getSleepData, getHydrationData};

let fetchData = (param) => {
    return fetch(`https://fitlit-api.herokuapp.com/api/v1/${param}`).then(response => response.json());
}
// fetchData(user)
// fetchData(sleep)
// fetchData(activity)
// fetchData(hydration)

export {fetchData};
