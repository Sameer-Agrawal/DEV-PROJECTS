const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom; //JSDOM is a class
const fs = require("fs");
const leaderBoard = [];
const xlsx = require("json-as-xlsx");
let counter = 0;

const link =
  "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

request(link, cb1);

function cb1(error, response, html) {
  if (error) {
    console.log("Error: " + error);
  } else {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    let hrefsContainer = document.querySelectorAll(
      ".ds-flex.ds-mx-4.ds-pt-2.ds-pb-3.ds-space-x-4.ds-border-t.ds-border-line-default-translucent"
    );
    // This will give 60 containers
    for (let i = 0; i < hrefsContainer.length; i++) {
      //60
      let hrefs = hrefsContainer[i].querySelectorAll("span a");
      let scorecardLink = hrefs[2].href;
      let completeLinks = "https://www.espncricinfo.com" + scorecardLink;
      counter++;
      request(completeLinks, cb2);
    }
  }
}

function cb2(error, response, html) {
  if (error) {
    console.log("Error: " + error);
  } else {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    let tables = document.querySelectorAll(
      ".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table"
    ); // Batsman Table Links
    for (let i = 0; i < tables.length; i++) {
      // console.log(tables[i].textContent);
      let rows = tables[i].querySelectorAll(
        "tbody .ds-border-b.ds-border-line.ds-text-tight-s"
      );
      // // console.log(rows);
      for (let i = 0; i < rows.length; i++) {
        let tds = rows[i].querySelectorAll("td");
        if (tds.length == 8) {
          let name = tds[0].textContent;
          let run = tds[2].textContent;
          let ball = tds[3].textContent;
          let four = tds[5].textContent;
          let six = tds[6].textContent;
          // console.log("Name : ",name,"Runs : ",run,"Balls : ",ball,"Fours : ",fours,"Sixes : ",sixes);
          processPlayer(name, run, ball, four, six);
        }
      }
    }
    counter--;
    if (counter == 0) {
      // console.log(leaderBoard);
      const data = JSON.stringify(leaderBoard);
      fs.writeFileSync("batsmanDetails.json", data);

      let dataExcel = [
        {
          sheet: "batsmanStats",
          columns: [
            { label: "Name", value: "name" }, // Top level data
            { label: "Innings", value: "innings" }, // Top level data
            { label: "Run", value: "run" }, // Top level data
            { label: "Ball", value: "ball" }, // Top level data
            { label: "Four", value: "four" }, // Top level data
            { label: "Six", value: "six" }, // Top level data
          ],
          content: leaderBoard
        },
      ];

      let settings = {
        fileName: "BatsmanDetails", // Name of the resulting spreadsheet
        extraLength: 3, // A bigger number means that columns will be wider
        writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
      };

      xlsx(dataExcel, settings); // Will download the excel file
    }
  }
}

function processPlayer(name, run, ball, four, six) {
  run = Number(run);
  ball = Number(ball);
  four = Number(four);
  six = Number(six);

  // If the player record already exists
  for (let i = 0; i < leaderBoard.length; i++) {
    let playerObj = leaderBoard[i];
    if (playerObj.name == name) {
      playerObj.innings += 1;
      playerObj.run += run;
      playerObj.ball += ball;
      playerObj.four += four;
      playerObj.six += six;
      return;
    }
  }

  // If we are creating a player record for first time
  let playerObj = {
    name: name,
    innings: 1,
    run: run,
    ball: ball,
    four: four,
    six: six,
  };
  leaderBoard.push(playerObj);
}
