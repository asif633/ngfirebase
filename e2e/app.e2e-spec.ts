import { NgfirebasePage } from './app.po';

describe('ngfirebase App', () => {
  let page: NgfirebasePage;

  beforeEach(() => {
    page = new NgfirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
