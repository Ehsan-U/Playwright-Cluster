const playwright = require('playwright-extra')
const { PlaywrightBlocker } = require('@cliqz/adblocker-playwright')
const stealth =  require('puppeteer-extra-plugin-stealth')()
const validator = require("./utils/validation")
const { URL } = require("url")



async function process_request(req) {
    body = req.body
    if (validator.is_valid(body.url)) {
        content = await get_page(body)
        return {url: body.url, response: content}
    }
    else {
        throw "URL not valid: "+url 
    }
}


async function get_page(body) {
    try {
        var browser = await playwright.chromium.use(stealth).launch({headless:true})
        var page = await browser.newPage()
        if (!body.ads_enabled) {
            // console.log("disable ads")
            PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
                blocker.enableBlockingInPage(page);
              });
        }
        if (!body.imaged_enabled) {
            console.log("disable images")
            await page.route('**/*.{png,jpg,jpeg}', route => route.abort());
        }

        await page.goto(body.url)
        if (body.wait_for) {
            // console.log("waiting for "+body.wait_for)
            await page.waitForTimeout(parseInt(body.wait_until))
        }
        if (body.wait_until) {
            // console.log("waiting until "+body.wait_until.selector)
            await page.waitForSelector(body.wait_until.selector, {timeout: parseInt(body.wait_until.timeout), state:body.wait_until.state})
        }
        content = await page.content()
        return content
    }
    catch (error) {
        throw "failed while loading page: "+error
    }
}




module.exports = {process_request}