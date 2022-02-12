// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './css/styles.css';
import './images/turing-logo.png';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration.js';
import Sleep from './Sleep.js';
import {getUserData, getSleepData, getHydrationData} from './apiCalls.js';


// QUERY SELECTORS
const welcomeBox = document.querySelector('.welcome-box');
const userStepGoalBox = document.querySelector('.user-step-goals');
const hydrationBox = document.querySelector('.hydration-box');

// EVENT LISTENERS

// DOM
Promise.all([getUserData, getHydrationData, getSleepData]).then(data => {
  // console.log(data)

  let newRepo = new UserRepository(data[0].userData);
  let hydrationRepo = new UserRepository(data[1]);
  let sleepRepo = new UserRepository(data[2]);
  let jarvis = new User(newRepo.allData[1]);
  let hydration = new Hydration(jarvis.id, hydrationRepo);
  let sleep = new Sleep(jarvis.id, sleepRepo);
  updateMainBox(jarvis, newRepo);
  updateHydrationBox(hydration);
  console.log(sleep.hoursSleptWeek('2020/01/16'))
});

function updateMainBox(person, repo) {
  welcomeBox.innerHTML += `
    <h1>Welcome back, ${person.returnFirstName()}</h1>
    <p>Email:</p>
    <p>${person.email}</p>
    <p>Friends: </p>
    <p>${person.friends.length}</p>
    <div class="average-step">
      <p>Your step goal: </p>
      <p>${person.dailyStepGoal} </p>
      <p>Average user step goal: </p>
      <p>${repo.averageStepGoal()} </p>
    </div>`
};

function updateHydrationBox(hydraRepo) {
  hydrationBox.innerHTML += `
  <p>Today's Water Consumption</p>
  <p>${hydraRepo.showTodaysOz()}</p>
  <p>Water Consumption Over Last 7 Days</p>
  <p>${hydraRepo.showWeeklyOz()}</p>`
}










// console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file

// An example of how you tell webpack to use an image (also need to link to it in the index.html)

// console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file
