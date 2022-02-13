import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import Hydration from '../src/Hydration';
import hydrationSample from '../src/data/hydration-sample';
import userData from '../src/data/users';

describe('Hydration', () => {

  let hydro1, hydro2, hydroRepo;

    beforeEach(() => {
      hydroRepo = new UserRepository(hydrationSample);
      hydro1 = new Hydration(1, hydroRepo);
      hydro2 = new Hydration(2, hydroRepo);
      });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  })

  it('should show the average daily ounces of water drank', () => {
    expect(hydro1.showAvgDailyOz()).to.equal(59);
    expect(hydro2.showAvgDailyOz()).to.equal(61.5);
  })

  it('should show the water drank today', () => {
    expect(hydro1.showTodaysOz()).to.equal(99);
  })

  it('should show the water drank in the last week', () => {
    expect(hydro1.showWeeklyOz()).to.deep.equal([ 39, 61, 51, 52, 29, 57, 99 ]);
  })

})
