import { PeopleModule } from './people.module';

describe('PeopleModule', () => {
  let peoplenModule: PeopleModule;

  beforeEach(() => {
    peoplenModule = new PeopleModule();
  });

  it('should create an instance', () => {
    expect(peoplenModule).toBeTruthy();
  });
});
