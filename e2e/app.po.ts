export class Eurong2rankPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('eurong2rank-app h1')).getText();
  }
}
