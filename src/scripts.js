import './css/styles.css';
import './images/turing-logo.png';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration.js';
import Sleep from './Sleep.js';
import Activity from './Activity.js';
// import {getUserData, getSleepData, getHydrationData} from './apiCalls.js';
import {fetchData} from './apiCalls.js';
// import domUpdates from './domUpdates.js';


// QUERY SELECTORS
const welcomeBox = document.querySelector('.welcome-box');
const userStepGoalBox = document.querySelector('.user-step-goals');
const hydrationBox = document.querySelector('.hydration-box');
const sleepBox = document.querySelector('.sleep-box')

// DOM
let makePromise = () => {Promise.all([fetchData('users'), fetchData('hydration'), fetchData('sleep'), fetchData('activity')]).then(data => {
  let newRepo = new UserRepository(data[0].userData);
  let hydrationRepo = new UserRepository(data[1].hydrationData);
  let sleepRepo = new UserRepository(data[2].sleepData);
  let activityRepo = new UserRepository(data[3].activityData)
  let jarvis = new User(newRepo.allData[1]);
  let hydration = new Hydration(jarvis.id, hydrationRepo);
  let sleep = new Sleep(jarvis.id, sleepRepo);
  let activity = new Activity(jarvis.id, activityRepo);
  console.log(activity.activityRepo.filter(data => data.userID <= 2))
  console.log(sleep);
  updateMainBox(jarvis, newRepo);
  updateHydrationBox(hydration);
  updateSleepBox(sleep);
})
};

function showFriendsNames(person, dataRepo) {
  const getFriends = dataRepo.allData.filter(data => person.friends.includes(data.id)).map(data => data.name)
  return getFriends;
}
function updateMainBox(person, repo) {
  // domUpdates.domMainBox(person, repo);
  welcomeBox.innerHTML += `
    <h1 class="welcome-tag">Welcome Back,</h1>
    <h2 class="name">${person.returnFirstName().toUpperCase()}</h2>
    <p><b>Email:</b></p>
    <p>${person.email}</p>
    <p><b>Friends:</b></p>
    <p>${showFriendsNames(person, repo)}</p>
    <div class="step">
      <div class="step-goal">
        <p><b>Your step goal:</b></p>
        <p>${person.dailyStepGoal} </p>
      </div>
      <div class="average-step">
        <p><b>Average user step goal:</b></p>
        <p>${repo.averageStepGoal()} </p>
      </div>
    </div>`
};

function updateHydrationBox(hydraRepo) {
  // domUpdates.domHydrationBox(hydraRepo);
  hydrationBox.innerHTML += `
  <p><b>Today's Water Consumption</b></p>
  <p>${hydraRepo.showTodaysOz()}</p>
  <p><b>Water Consumption Over Last 7 Days</b></p>
  <p>${hydraRepo.showWeeklyOz()}</p>`
}

function updateSleepBox(sleepRepo) {
  // domUpdates.domSleepBox(sleepRepo);
  sleepBox.innerHTML += `
  <p><b>Hours Slept from last week</b></p>
  <p>${sleepRepo.hoursSleptWeek('2020/01/16')}</p>
  <p><b>Sleep Quality from last week</b></p>
  <p>${sleepRepo.qualitySleepWeek('2020/01/16')}</p>
  <p><b>Quality of Sleep Yesterday</b></p>
  <p>${sleepRepo.sleepQualityDay('2020/01/22')}</p>
  <p><b>Hours Slept Yesterday</b></p>
  <p>${sleepRepo.hoursSleptDay('2020/01/22')}</p>
  <p><b>All Time Average Sleep Quality</b></p>
  <p>${sleepRepo.avgSleepQuality()}</p>
  <p><b>All Time Average Hours Slept</b></p>
  <p>${sleepRepo.avgHoursSlept()}</p>`
}

// EVENT LISTENERS
window.addEventListener("onload", makePromise());
