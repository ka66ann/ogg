import core from 'puppeteer-core';
import { getOptions } from './options';
let _page;
async function getPage(isDev) {
    if (_page) {
        return _page;
    }
    const options = await getOptions(isDev);
    const browser = await core.launch(options);
    _page = await browser.newPage();
    return _page;
}
export async function getScreenshot(html, type, isDev) {
    const page = await getPage(isDev);
    await page.setViewport({ width: 2048, height: 1170 });
    await page.goto("https://danube-webshop.herokuapp.com", {
      waitUntil: "networkidle2",
    })


   // console.log(html)
   // await page.setContent(html);
    const file = await page.screenshot({ type });
    return file;
}
