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
  });

  it('should take in objects as parameters', () => {
    expect(hydro1).to.be.an('object');
    expect(hydro2).to.be.an('object');
  })

})
