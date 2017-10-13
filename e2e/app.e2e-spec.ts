import { VtServerPage } from './app.po';

describe('vt-server App', () => {
  let page: VtServerPage;

  beforeEach(() => {
    page = new VtServerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
