import { AppPage } from './app.po';

describe('ponyracer App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ponyracer Always a pleasure to bet on ponies');
  });
});
