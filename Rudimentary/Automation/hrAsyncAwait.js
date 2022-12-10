const puppeteer = require('puppeteer')
let mail = "rofaka4475@lenfly.com";
let pass = "1234567890";
const code = require('./code');

(async function(){ 
    // Isko async banadiya so ye node api par jakar run hoga
    // js engine ki main thread block nahi hogi
    let browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-fullscreen'] }); 
    let page = await browser.newPage();
    await page.goto("https://www.hackerrank.com/");
    await waitAndClick("ul.menu a",page);
    await page.waitForSelector("span.fl-button-text");
    await page.evaluate(function(){
        let btns = document.querySelectorAll("span.fl-button-text")
        btns[1].click();
    })
    await page.waitForSelector("#input-1");
    await page.type('#input-1', mail, {delay: 100});
    await page.type('#input-2', pass, {delay: 100})
    await waitAndClick("button[data-analytics='LoginPassword']",page);
    await waitAndClick('div[data-automation="algorithms"]',page);
    await page.waitForSelector('.filter-group');
    await page.evaluate(function(){
        let filters = document.querySelectorAll(".filter-group")
        let reqFilter = filters[3];
        let warmupCheckBox = reqFilter.querySelector(".ui-checklist-list-item input");
        warmupCheckBox.click();
        return;
    })
    await page.waitForSelector('.challenges-list .js-track-click.challenge-list-item');
    let quesArray = await page.evaluate(function(){  // page.evaluate returns a promise
        let array = [];
        let anchors = document.querySelectorAll('.challenges-list .js-track-click.challenge-list-item')
        for(let i=0; i<anchors.length; i++){
            let quesLink = anchors[i].href;
            // let completeLink = "https://www.hackerrank.com/" + quesLink;
            array.push(quesLink);
        }
        return array;  // Hum jo bhi value return kar rahe hai wo value resolve mai pass kar deta hai page.evaluate
    })
    for(let i=0; i<quesArray.length; i++){
        await questionSolver(quesArray[i],code.answers[i],page)
        if(i == quesArray.length-1){
            console.log("Question Submitted Successfully");
        }
    }
})();

async function waitAndClick(selector,page){
    await page.waitForSelector(selector);
    await page.click(selector);
}

async function questionSolver(question,answer,page){
    await page.goto(question);
    await waitAndClick(".checkBoxWrapper input",page);
    await waitAndClick('#input-1',page);
    await page.type('#input-1', answer);
    await page.keyboard.down('Control');
    await page.keyboard.press("A");
    await page.keyboard.press("X");
    await page.keyboard.up('Control');
    await waitAndClick('.monaco-editor.no-user-select.vs',page);
    await page.keyboard.down('Control');
    await page.keyboard.press("A");
    await page.keyboard.press("V");
    await page.keyboard.up('Control');
    await waitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled',page);
}