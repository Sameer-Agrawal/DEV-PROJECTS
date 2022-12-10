const fs = require("fs");
const path = require("path");
const inputArr = process.argv;
// Hum above tarika use karke input de sakte hai
const folderPath = inputArr[2];
// console.log(input);
// Main task --> Read the directory
const confirmation = fs.existsSync(folderPath);
const extensions = {  // Ye extension ke hisab se humko files ko different folders mai arrange karna hai
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpeg",".jpg",".png",".gif"],
    Software:[".exe"]
};
if(confirmation){
    let dirContent = fs.readdirSync(folderPath);  // Ye ek array return karega files ke sath
    for(let i=0; i<dirContent.length; i++){
        const file = dirContent[i];
        const fileExtension = path.extname(file);
        const folderName = giveFolderName(fileExtension);
        // console.log("fileName --> ",file,"folderName --> ",folderName);
        const fileFolderPath = path.join(folderPath,folderName);
        if(fs.existsSync(fileFolderPath)){
            move(fileFolderPath,file);
        }else{
            fs.mkdirSync(fileFolderPath);
            move(fileFolderPath,file);
        }
    }
}else{
    console.log("Enter valid path");
}

function giveFolderName(fileExtension){
    // We can iterate over objects using for in loop
    for(let key in extensions){
        // console.log(key);
        for(let i=0; i<extensions[key].length; i++){
            if(extensions[key][i] == fileExtension){
                return key;
            }
        }
    }
}

// Humne source path se file ko copy kar liya and copy hone ke baad source path par jo file rakhi thi usko delete kar diya
function move(fileFolderPath,file){  
    sourcePath = path.join(folderPath,file); // isse humko ek particular file ka path mila
    destinationPath = path.join(fileFolderPath,file); // Ussi file ka designated folder mila according to extensions
    fs.copyFileSync(sourcePath, destinationPath);
    fs.unlinkSync(sourcePath);
}
