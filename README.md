# FitLit

## Table of Contents

  - [Introduction](#Introduction)
  - [Set Up and Installation](#Set-Up)
  - [Technologies](#Technologies)
  - [Illustrations](#Illustrations)
  - [Possible Future Extensions](#Possible-Future-Extensions)
  - [Contributors](#Collaborators)
  - [Sources](#Sources)
  - [Project Specs](#Project-Specs)

## Introduction

FitLit is an activity tracker that shows a user's individual activity and wellness data.
Users are able to view their sleep, step and hydration stats, along with that user's data in relation to a database of other user's data.

Test driven development was used to drive the implementation of our code, making sure the data presented for each day is accurate.  

The user is also able to submit data directly in the app using forms for submission, and the data is posted to the server using the fetch POST methodology.

Additionally, steps were taken to improve the accessibility of the website so that it meets the requirements provided by the Lighthouse test and the Wave test.

## Set Up and Installation

1. Clone down the project repository by opening up your console and entering the following command: git clone git@github.com:roryemagee1/fitlit-project.git.
2. Once the repo has been cloned, change into the root directory and install the project dependencies using npm install.
3. Run npm start to start the server, http://localhost:8080/.
4. Next, clone down the data server into a folder in the same directory containing the fit-list project directory.  Paste the following command into your terminal at the correct directory to do this: git clone git@github.com:roryemagee1/fitlit-api.git.
5. Change into the new directory and once again, run npm install to install the necessary project dependencies.
6. Copy and paste the local host code into your browser to see the working app (http://localhost:8080/).
7. Note: The data in the project can only be found at the following server link when the server is on: http://localhost:3001/api/v1/.

## Technologies
  - Javascript
  - HTML
  - CSS
  - Mocha
  - Chai

## Illustrations

<img width="1356" alt="Screen Shot 2022-02-28 at 7 22 23 PM" src="https://user-images.githubusercontent.com/92283709/156093604-b386767c-0b8e-4e40-b8f5-d43d7e39a4de.png">


## Possible Future Extensions

  - Add activity tracker which allows users to track specific step goals and milestones.
  - Note: Due to time constraints, the activity tracker feature has been delayed until the next iteration of the project ;).

## Contributors

  - [Sam Mistele](https://github.com/SamusMist)
  - [Ali Nooner](https://github.com/AliNooner)
  - [Rory Magee](https://github.com/roryemagee1)

## Sources
  - [MDN - promiseAll( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
  - [W3Schools](https://www.w3schools.com/)

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/Fitlit-part-one.html)
