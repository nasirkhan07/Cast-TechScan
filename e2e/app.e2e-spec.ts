import { TechScanPage } from './app.po';

describe('tech-scan App', () => {
  let page: TechScanPage;

  beforeEach(() => {
    page = new TechScanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
