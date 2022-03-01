import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import Activity from '../src/Activity';
import activitySample from '../src/data/activity-sample.js';

describe('Activity', () => {

  let activity1, activity2, activityRepo;

  beforeEach(() => {
    activityRepo = new UserRepository(activitySample);
    activity1 = new Activity(1, activityRepo);
    activity2 = new Activity(2, activityRepo);
  })

  it.only('should be a function', () => {
    expect(Activity).to.be.a('function');
  })

  it('should show miles user has walked for a specified day', () => {

  })

})
