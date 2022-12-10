// We are going to scrap full name and DOB of Batsman

const request = require('request');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";


// .ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table .ds-text-tight-s.ds-font-medium
// Isse batsman ke naam mil rahe hai but extra names bhi
// .ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table .ds-border-b.ds-border-line.ds-text-tight-s .ds-inline-flex.ds-items-center.ds-leading-none a
// Above one proper names de raha hai

request(link,cb1);

function cb1(error,response,html){
    if(error){
        console.log("Error :",error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmanAnchors = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table .ds-border-b.ds-border-line.ds-text-tight-s .ds-inline-flex.ds-items-center.ds-leading-none a");
        for(let i = 0; i < batsmanAnchors.length; i++){
            let batsmanLinks = batsmanAnchors[i].href;
            let completeLinks = "https://www.espncricinfo.com" + batsmanLinks;
            request(completeLinks, cb2)
        }
        // console.log(batsmanLinks.length);
    }
}

function cb2(error, response, html){
    if(error){
        console.log("Error :",error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmanDetails = document.querySelectorAll(".ds-text-title-s.ds-font-bold.ds-text-ui-typo");
        let fullName = batsmanDetails[0].textContent
        let dateOfBirth = batsmanDetails[1].textContent
        console.log("Full Name : ",fullName," Date of Birth : ",dateOfBirth.substring(0, dateOfBirth.indexOf(',')));
        // dateofBirth also included place of birth and state so we can write a logic to just include DOB
    }
}
