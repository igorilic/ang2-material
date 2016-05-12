import { Eurong2rankPage } from './app.po';

describe('eurong2rank App', function() {
  let page: Eurong2rankPage;

  beforeEach(() => {
    page = new Eurong2rankPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('eurong2rank works!');
  });
});
