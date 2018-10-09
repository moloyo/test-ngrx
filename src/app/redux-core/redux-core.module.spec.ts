import { ReduxCoreModule } from './redux-core.module';

describe('ReduxCoreModule', () => {
  let reduxCoreModule: ReduxCoreModule;

  beforeEach(() => {
    reduxCoreModule = new ReduxCoreModule();
  });

  it('should create an instance', () => {
    expect(reduxCoreModule).toBeTruthy();
  });
});
