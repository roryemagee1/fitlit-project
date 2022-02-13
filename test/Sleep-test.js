import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import Sleep from '../src/Sleep';
import sleepSample from '../src/data/sleep-sample.js';

describe('Sleep', () => {

  let sleep1, sleep2, sleepRepo;

    beforeEach(() => {
      sleepRepo = new UserRepository(sleepSample);
      sleep1 = new Sleep(1, sleepRepo);
      sleep2 = new Sleep(2, sleepRepo);
      });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  })

  it('should show the average hours slept', () => {
    expect(sleep1.avgHoursSlept()).to.equal(7.619999999999999);
    expect(sleep2.avgHoursSlept()).to.equal(7.985714285714286);
  })

  it('should show the average sleep quality', () => {
    expect(sleep1.avgSleepQuality()).to.equal(2.7133333333333334);
    expect(sleep2.avgSleepQuality()).to.equal(3.121428571428571);
  })

  it('should show the hours slept on a given day', () => {
    expect(sleep1.hoursSleptDay('2019/06/15')).to.equal(6.1);
    expect(sleep2.hoursSleptDay('2019/06/15')).to.equal(7);
  })

  it('should show the sleep quality on a given day', () => {
    expect(sleep1.sleepQualityDay('2019/06/15')).to.equal(2.2);
    expect(sleep2.sleepQualityDay('2019/06/15')).to.equal(4.7);
  })

  it('should show the hours slept during a specified week', () => {
    expect(sleep1.hoursSleptWeek('2019/06/15')).to.deep.equal([ 6.1, 4.1, 8, 10.4, 10.7, 9.3, 7.8 ]);
    expect(sleep2.hoursSleptWeek('2019/06/15')).to.deep.equal([ 7, 7.5, 5.7, 10.8, 9.6, 10.1, 4.3 ]);
  })

  it('should show the quality of sleep during a specified week', () => {
    expect(sleep1.qualitySleepWeek('2019/06/15')).to.deep.equal([ 2.2, 3.8, 2.6, 3.1, 1.2, 1.2, 4.2 ]);
    expect(sleep2.qualitySleepWeek('2019/06/15')).to.deep.equal([ 4.7, 3.8, 3, 3.2, 2.5, 2.4, 4.8 ]);
  })

  it('should show the average sleep quality overall', () => {
    expect(sleep1.avgSleepQualityAll()).to.equal(2.9103448275862065);
    expect(sleep2.avgSleepQualityAll()).to.equal(2.9103448275862065);
  })

})
