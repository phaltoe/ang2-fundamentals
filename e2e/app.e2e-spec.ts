import { Ang2FundamentalsPage } from './app.po';

describe('ang2-fundamentals App', function() {
  let page: Ang2FundamentalsPage;

  beforeEach(() => {
    page = new Ang2FundamentalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
