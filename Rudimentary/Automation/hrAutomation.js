const puppeteer = require('puppeteer')
let page;
let mail = "rofaka4475@lenfly.com";
let pass = "1234567890";
const code = require('./code')
// let quesArray = [];
let browserPromise = puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-fullscreen'] }); // puppeteer use chromium browser
// Agar hum headless false nahi karte then humko real time mai task hote hue nahi dikhta tha
browserPromise.then(function(browserInstance){
    // console.log(browserInstance);   
    let pagePromise = browserInstance.newPage(); // browser ke andar ek promisified method hoti hai newPage jo new page deti hai
    return pagePromise;
}).then(function(pageInstance){
    page = pageInstance
    let urlPromise = page.goto("https://www.hackerrank.com/") // page ke pass ek goto method hota hai jo url visit karne ka promise deta hai
    return urlPromise;
    // Yaha se possiblity hai promise pending hai
}).then(function(){
    // if agar resolved consider karne mai and page ke pura tarah reload hone mai kuch delay hoga usse code faat sakta hai isliye hum selector ka wait karege
    return waitAndClick("ul.menu a");
}).then(function(){
    let waitPromise = page.waitForSelector("span.fl-button-text");
    return waitPromise;
}).then(function(){
    // Hum page.evaluate likhkar isme directly chromium browser ke sath interact kar sakte hai
    let btnClickPromise = page.evaluate(function(){
        let btns = document.querySelectorAll("span.fl-button-text")
        btns[1].click();
    })
    return btnClickPromise;
}).then(function(){
    let waitPromise = page.waitForSelector("#input-1");
    return waitPromise;
}).then(function(){
    let emailTypingPromise = page.type('#input-1', mail, {delay: 100});  // Delay dalne se thoda typing wala effect milta hai
    return emailTypingPromise;
}).then(function(){
    let passwordTypingPromise = page.type('#input-2', pass, {delay: 100})
    return passwordTypingPromise;
}).then(function(){
    let clickPromise = page.click("button[data-analytics='LoginPassword']");  // Ye click karne ka promise deta hai that ye click kar denga
    return clickPromise;
}).then(function(){
    return waitAndClick('div[data-automation="algorithms"]');
}).then(function(){
    let waitPromise = page.waitForSelector('.filter-group');
    return waitPromise;
}).then(function(){
    let warmupClickPromise = page.evaluate(function(){
        let filters = document.querySelectorAll(".filter-group")
        let reqFilter = filters[3];
        let warmupCheckBox = reqFilter.querySelector(".ui-checklist-list-item input");
        warmupCheckBox.click();
        return;
    })
    return warmupClickPromise;
}).then(function(){
    return page.waitForSelector('.challenges-list .js-track-click.challenge-list-item');
}).then(function(){
    let arrayPromise = page.evaluate(function(){  // page.evaluate returns a promise
        let array = [];
        let anchors = document.querySelectorAll('.challenges-list .js-track-click.challenge-list-item')
        for(let i=0; i<anchors.length; i++){
            let quesLink = anchors[i].href;
            // let completeLink = "https://www.hackerrank.com/" + quesLink;
            array.push(quesLink);
        }
        return array;  // Hum jo bhi value return kar rahe hai wo value resolve mai pass kar deta hai page.evaluate
    })
    return arrayPromise;
}).then(function(quesArray){
    // console.log(quesArray.length);
    // console.log(code.answers.length);
    let questionSolverPromise = questionSolver(quesArray[0],code.answers[0])
    for(let i=1; i<quesArray.length; i++){
        questionSolverPromise = questionSolverPromise.then(function(){
            newQuestionPromise = questionSolver(quesArray[i],code.answers[i])
            return newQuestionPromise;
        })
    }
    return questionSolverPromise;
}).then(function(){
    console.log("successfully solved all the questions")
}).catch(function(error){
    console.log(error);
})

function questionSolver(question,answer){
    return new Promise(function(resolve,reject){
        let urlPromise = page.goto(question) // page ke pass ek goto method hota hai jo url visit karne ka promise deta hai
        urlPromise.then(function(){
            // As Jo Code likhne ke liye space hai usme autocorrect hai thats y hum custom input mai likhegee
            return waitAndClick(".checkBoxWrapper input")
        }).then(function(){
            return waitAndClick('#input-1')
        }).then(function(){
            return page.type('#input-1', answer)
        }).then(function(){
            return page.keyboard.down('Control'); // ye keyboard ka control button hold karke rakhegaa
        }).then(function(){
            return page.keyboard.press("A")
        }).then(function(){
            return page.keyboard.press("X")
        }).then(function(){
            return page.keyboard.up('Control');
        }).then(function(){
            return waitAndClick('.monaco-editor.no-user-select.vs');
        }).then(function(){
            return page.keyboard.down('Control'); // ye keyboard ka control button hold karke rakhegaa
        }).then(function(){
            return page.keyboard.press("A")
        }).then(function(){
            return page.keyboard.press("V")
        }).then(function(){
            return page.keyboard.up('Control');
        }).then(function(){
            return waitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled')
        }).then(function(){
            // console.log("Answer Submitted Successfully");
            resolve();
        })
    })
}

function waitAndClick(selector){  // Yeh promisified function hai
    return new Promise(function(resolve, reject){ // Jaha par bhi yeh call hoga waha par Ek pending promise object aa jayega
        // Promisified function jaruri hai tabhi Serially execution hoga
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function(){
            let clickPromise = page.click(selector);
            return clickPromise;
        }).then(function(){
            resolve();  // Taki aage ka kaam bhi ho paaye
        })
    })
}