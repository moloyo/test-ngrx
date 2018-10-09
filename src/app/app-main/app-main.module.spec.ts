import { AppMainModule } from './app-main.module';

describe('AppMainModule', () => {
  let appMainModule: AppMainModule;

  beforeEach(() => {
    appMainModule = new AppMainModule();
  });

  it('should create an instance', () => {
    expect(appMainModule).toBeTruthy();
  });
});
