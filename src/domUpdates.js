const welcomeBox = document.querySelector('.welcome-box');
const hydrationBox = document.querySelector('.hydration-box');
const sleepBox = document.querySelector('.sleep-box');

function updateMainBox(person, repo) {
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
  hydrationBox.innerHTML += `
  <p><b>Today's Water Consumption</b></p>
  <p>${hydraRepo.showTodaysOz()}</p>
  <p><b>Water Consumption Over Last 7 Days</b></p>
  <p>${hydraRepo.showWeeklyOz()}</p>`
}

function updateSleepBox(sleepRepo) {
  sleepBox.innerHTML += `
  <p><b>Hours Slept from last week</b></p>
  <p>${sleepRepo.hoursSleptWeek('2020/01/16')}</p>
  <p><b>Sleep Quality from last week</b></p>
  <p>${sleepRepo.qualitySleepWeek('2020/01/16')}</p>
  <p><b>Quality of Sleep Yesterday</b></p>
  <p>${sleepRepo.sleepQualityDay('2020/01/20')}</p>
  <p><b>Hours Slept Yesterday</b></p>
  <p>${sleepRepo.hoursSleptDay('2020/01/20')}</p>
  <p><b>All Time Average Sleep Quality</b></p>
  <p>${sleepRepo.avgSleepQuality()}</p>
  <p><b>All Time Average Hours Slept</b></p>
  <p>${sleepRepo.avgHoursSlept()}</p>`
}

function showFriendsNames(person, dataRepo) {
  const getFriends = dataRepo.allData.filter(data => person.friends.includes(data.id)).map(data => data.name)
  return getFriends;
}




export {updateMainBox, updateHydrationBox, updateSleepBox, showFriendsNames}
