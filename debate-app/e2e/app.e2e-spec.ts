import { DebateAppPage } from './app.po';

describe('debate-app App', () => {
  let page: DebateAppPage;

  beforeEach(() => {
    page = new DebateAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
