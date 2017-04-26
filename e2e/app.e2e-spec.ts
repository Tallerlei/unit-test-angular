import { UnitTestAngularPage } from './app.po';

describe('unit-test-angular App', () => {
  let page: UnitTestAngularPage;

  beforeEach(() => {
    page = new UnitTestAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
