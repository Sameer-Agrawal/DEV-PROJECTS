const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom; //JSDOM is a class
let counter = 0;
let count = 0;
const link = "https://github.com/topics";
const outputParentFolder = __dirname;
let repoIssueArray;
const path = require("path")
const fs = require("fs")

request(link, cb1);

function cb1(error, response, html) {
  if (error) {
    console.log("Error: " + error);
  } else {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const topicLinks = document.querySelectorAll(".container-lg.p-responsive.mt-6 ul li a");
    for(let i=0; i<topicLinks.length; i++) {
        const topicLink = topicLinks[i].href;
        const completeTopicLink = "https://github.com" + topicLink;
        const topicFolderElement = topicLinks[i].querySelector("p.f3");  // iska use karke humne folder name nikala
        const topicFolderName = topicFolderElement.textContent;  // Yeh Line ka use karrahe sirf folder banane ka prereq jaise
        // We have to create the folder of the respective names
        const topicFolderPath = path.join(outputParentFolder,topicFolderName);
        if(!fs.existsSync(topicFolderPath)){  // Isne first time mai three folders banane chahiye
            fs.mkdirSync(topicFolderPath);  // If folder exist nahi karta then ye folder bana dega
        }
        request(completeTopicLink, cb2);
    }
  }
}



// Ye function 3 times call hoga according to three links
function cb2(error, response, html) {
    if (error) {
        console.log("Error: " + error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let topicHeader = document.querySelectorAll("div article .px-3 div div h3")
        for(let i=0; i<10; i++) {  // humne decide kiya that hum pehli 10 repository hi dekhegee
            // console.log(topicHeader[i]);
            // topicHeader ek element hai jisme do anchor tags hai
            let anchorTags = topicHeader[i].querySelectorAll("a");
            // .trim() method is used to remove the white spaces from both the ends of the given string.
            const jsonFileName = anchorTags[0].textContent.trim();
            const repositoryName = anchorTags[1].textContent.trim();
            repoIssueArray = [];
            //   https://github.com/symfony/http-foundation
            let linkToRepo = "https://github.com/"+jsonFileName+"/"+repositoryName
            // We finally got the link to all the thirty repos
            let repoIssuesLink = linkToRepo + "/issues"; 
            // console.log(repoIssuesLink);
            request(repoIssuesLink, cb3)  // Total 30 request lagegi yaha se. 10 per topic
        }    
    }
}

// Ye function total 30 times call hoga
function cb3(error, response, html) {  // Ek repo ke liye ekbaar hum ye function mai aayenge
    if (error) {
        console.log("Error: " + error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let issueAnchor = document.querySelectorAll('.flex-auto.min-width-0.p-2.pr-3.pr-md-2 .Link--primary');
        if(issueAnchor.length != 0){
            for (let i = 0; i < issueAnchor.length; i++){
                let issueLink = issueAnchor[i].href;
                let completeLink =  "https://github.com" + issueLink;
                let issueName = issueAnchor[i].textContent
                // console.log(issueName);
                nameLinkPusher(issueName, completeLink);
            }
        }else{
            // json mai likhwana padega that no issues present in the repository
            // console.log("No issues present in the repository");
            // Else Mai aaye matlab pure repo mai ek bhi issue present nahi hai
            repoIssueArray.push("No issues present in the repository");
        }
    }
    console.log(repoIssueArray)
}


function nameLinkPusher(issueName, completeLink){
    const object ={
        IssueName : issueName,
        CompleteLink : completeLink
    }
    repoIssueArray.push(object);
}


        


