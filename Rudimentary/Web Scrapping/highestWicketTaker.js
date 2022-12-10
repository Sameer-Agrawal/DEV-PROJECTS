// .ds-w-full.ds-table.ds-table-xs.ds-table-fixed



const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";
let results = [];

request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document =  dom.window.document;
        let tables = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed");
        for(let i = 1; i < tables.length; i=i+2){
            // console.log(bowlerTables.textContent);
            let rows = tables[i].querySelectorAll("tbody .ds-border-b.ds-border-line.ds-text-tight-s");
            // console.log(rows);
            for(let i=0; i<rows.length; i++){
                let tds = rows[i].querySelectorAll("td");
                let name = tds[0].textContent;
                let wicket = tds[4].textContent;
                // console.log("Name of Bowler ---> ",name,"     Wickets ---> ",wicket);
                objCreator(name,wicket);
            }

        }

        let highestWicketTaker = results[0];
        for(let i=1; i<results.length; i++){
            let nameWicketObj = results[i];
            if(nameWicketObj.wickets > highestWicketTaker.wickets){
                highestWicketTaker = nameWicketObj;
            }
        }
        console.log("Name of Bowler ---> ",highestWicketTaker.name,"     Wickets ---> ",highestWicketTaker.wickets);
        // console.log(highestWicketTaker);
    }
}


// Hum yaha par constructor function use karenge jo name and wicket ka object banakar array mai push kardenge

function objCreator(playerName, playerWickets){
    let playerObj = {
        name: playerName,
        wickets: playerWickets
    }
    results.push(playerObj);
}