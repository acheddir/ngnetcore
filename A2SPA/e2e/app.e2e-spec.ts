import { A2spaPage } from './app.po';

describe('a2spa App', () => {
  let page: A2spaPage;

  beforeEach(() => {
    page = new A2spaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
