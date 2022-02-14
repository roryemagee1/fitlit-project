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
const sleepBox = document.querySelector('.sleep-box')

// DOM
Promise.all([getUserData, getHydrationData, getSleepData]).then(data => {
  let newRepo = new UserRepository(data[0].userData);
  let hydrationRepo = new UserRepository(data[1].hydrationData);
  let sleepRepo = new UserRepository(data[2].sleepData);
  let jarvis = new User(newRepo.allData[1]);
  let hydration = new Hydration(jarvis.id, hydrationRepo);
  let sleep = new Sleep(jarvis.id, sleepRepo);
  updateMainBox(jarvis, newRepo);
  updateHydrationBox(hydration);
  updateSleepBox(sleep);
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

function updateSleepBox(sleepRepo) {
  sleepBox.innerHTML += `
  <p>Hours Slept from last week</p>
  <p>${sleepRepo.hoursSleptWeek('2020/01/16')}</p>
  <p>Sleep Quality from last week</p>
  <p>${sleepRepo.qualitySleepWeek('2020/01/16')}</p>
  <p>Quality of Sleep Yesterday</p>
  <p>${sleepRepo.sleepQualityDay('2020/01/22')}</p>
  <p>Hours Slept Yesterday</p>
  <p>${sleepRepo.hoursSleptDay('2020/01/22')}</p>
  <p>All Time Average Sleep Quality</p>
  <p>${sleepRepo.avgSleepQuality()}</p>
  <p>All Time Average Hours Slept</p>
  <p>${sleepRepo.avgHoursSlept()}</p>`
}
