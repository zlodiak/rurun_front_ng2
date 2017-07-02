import { RurunPage } from './app.po';

describe('rurun App', () => {
  let page: RurunPage;

  beforeEach(() => {
    page = new RurunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
