import { AsynProgrammingPage } from './app.po';

describe('asyn-programming App', () => {
  let page: AsynProgrammingPage;

  beforeEach(() => {
    page = new AsynProgrammingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
