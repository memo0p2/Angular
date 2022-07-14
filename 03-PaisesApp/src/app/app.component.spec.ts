const puppeteer = require('puppeteer-extra');
puppeteer.use(require('puppeteer-extra-plugin-angular')());
describe('AppComponent', () => {
  it('Test Puppeteer screenshot', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:9876/');
    await page.screenshot({ path: 'example.png' });

    await browser.close();
  });
});
