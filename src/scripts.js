// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './css/styles.css';
import './images/turing-logo.png'
// import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';
// import userData from './apiCalls.js';
import {getUserData, getSleepData, getHydrationData} from './apiCalls.js'
// QUERY SELECTORS
const welcomeBox = document.querySelector('.welcome-box');
const userStepGoalBox = document.querySelector('.user-step-goals');

//EVENT LISTENERS
let newUser;
let newRepo;
let theData;

Promise.all([getUserData, getHydrationData, getSleepData]).then(data => {
  console.log(data);
  newRepo = new UserRepository(data[0].userData);
  newUser = new User(newRepo.allData[1]);
  console.log(newRepo);
  console.log(newUser);
  testDataOutput();
  });

function testDataOutput() {
  welcomeBox.innerHTML += `<h1> ${newUser.name} is free! </h1>`;
}



// const x = () => {
//   return Promise.all([
//     getUserData,
//     getHydrationData,
//     getSleepData,
//   ]).then(data => {
//     newRepo = new UserRepository(data[0])
//     console.log(newRepo)
//     newUser = new User(newRepo.allData[0][1])
//     console.log(newUser)
//   }).catch(err => console.log(err))
// }

// FUNCTIONS
// fetchData()

function newUserInstance() {

};

// function newRepositoryInstance() {
//   const newRepo = new UserRepository(fetchData());
//   return newRepo;
// }

function welcomeUser() {
  const newUser = newUserInstance();
  console.log(newUserInstance())
  const welcome = newUser.returnFirstName();
  return welcome;
};

function updateMainBox() {
  console.log('hi')
  welcomeBox.innerHTML += `
    <h1>Welcome back, ${welcomeUser()}</h1>
    <p>Email:</p>
    <p>${newUserInstance().email}</p>
    <p>Friends: </p>
    <p>${newUserInstance().friends.length}</p>
    <div class="average-step">
      <p>Your weekly step goal: </p>
      <p>${newUserInstance().dailyStepGoal} </p>
      <p>Average user step goal: </p>
      <p>${newRepositoryInstance().averageStepGoal()} </p>
    </div>`
};



window.addEventListener('load', x())
welcomeBox.addEventListener('load', updateMainBox());
userStepGoalBox.addEventListener('load', updateStepGoalBox());








console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file

// An example of how you tell webpack to use an image (also need to link to it in the index.html)

// console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file
