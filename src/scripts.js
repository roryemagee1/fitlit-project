import './css/styles.css';
import './images/turing-logo.png';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration.js';
import Sleep from './Sleep.js';
import Activity from './Activity.js';
import {fetchData} from './apiCalls.js';
import {updateMainBox, updateHydrationBox, updateSleepBox} from './domUpdates.js'

const sleepURL = 'http://localhost:3001/api/v1/sleep';
const hydrationURL = 'http://localhost:3001/api/v1/hydration';

// QUERY SELECTORS
const welcomeBox = document.querySelector('.welcome-box');
const userStepGoalBox = document.querySelector('.user-step-goals');
const hydrationBox = document.querySelector('.hydration-box');
const sleepBox = document.querySelector('.sleep-box');
const sleepForm = document.querySelector('.sleep-form');
const hydrationForm = document.querySelector('.hydration-form');
const errorTag = document.querySelector('.js-error');

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
  updateMainBox(jarvis, newRepo);
  updateHydrationBox(hydration);
  updateSleepBox(sleep);
})
};

const displayError = (error) => {
  console.log(">>>error")
  console.log(error.message)
  if(error.message === "Failed to fetch") {
    errorTag.innerText = "Whoopsie"
  } else {
    errorTag.innerText = error.message
  }
}

const postData = (url, newData) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    console.log(response, "response")
    if(!response.ok) {
      throw new Error(`Please make sure that all fields are filled in.`);
    } else {
    response.json()
  }
  })
}


// EVENT LISTENERS
window.addEventListener("onload", makePromise());

hydrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newHydrationEntry = {
    userID: parseInt(e.target.id),
    date: formData.get('date'),
    numOunces: parseInt(formData.get('ounces')),
  };
  console.log(formData.get('user_id'))
  postData(hydrationURL, newHydrationEntry);
  makePromise()
  e.target.reset();
});

sleepForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newSleepEntry = {
    userID: parseInt(e.target.id),
    date: formData.get('date'),
    hoursSlept: parseInt(formData.get('hours_slept')),
    sleepQuality: parseInt(formData.get('sleep_quality'))
  };
  console.log(formData.get('user_id'))
  postData(sleepURL, newSleepEntry);
  makePromise()
  e.target.reset();
});
