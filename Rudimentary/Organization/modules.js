let cp = require("child_process");
const path = require("path");

// cp.execSync("code")

// Agar humko os ki infornmation chahiye to hum os module use kar sakte hai
// hum code use karke vscode bhi open kar sakte hai

// let content = cp.execSync("node test.js")

// console.log(content+"")

// hum childprocess module ko kuch bhi execute karne ke liye use kar sakte hai

// console.log(path);

// console.log(path.extname("C:\Users\CONFI\Desktop\BOM-DOM\Dev\Practice\nodeModules\test.js"))
// Extname humko koi bhi file ka extension de deta hai
// __filename jo bhi file ke sath ap kaam kar rahe ho wo file ka totol path return karta hai __filename
// console.log(path.basename(__filename));
// console.log(__dirname); // ap jo bhi file ke sath kaam kar rahe hai uske parent directory ka path de deta hai pura

// let filepath = path.join(__dirname,path.basename(__filename));
// console.log(filepath);

// console.log(path.basename(__filename));

const fs = require("fs");
// let filepath = path.join(__dirname,"testing.txt")  // ye humko string return karegaa
// // Agar filepath exist nahi karta to yeh create kar dega testing.txt ko aur agar exist karta hai to override karega
// fs.writeFileSync(filepath,"to be written in testing.txt")

// // R-read
// // let content = fs.readFileSync(filepath);
// // console.log(content + "");

// // U-update
// fs.appendFileSync(filepath,"test.js")
// let content = fs.readFileSync(filepath);
// console.log(content + "");

// // Delete the file
// fs.unlinkSync(filepath)

// console.log(fs);

// Working with directory

// fs.mkdirSync("newDirectory");

// console.log(fs.existsSync("newDirectory"));
// Agar directory exist karti hai then true return karegi nahi to false

// let content = fs.readdirSync(__dirname);
// console.log(content);

// fs.rmdirSync("newDirectory")

// let source = path.join(__dirname, "test.js");
// let destination = path.join("../", "testing.js")  // Yaha par bhi agar file exist nahi karti to yeh khud bana dega
// fs.copyFileSync(source, destination);

// console.log(path.extname("Sameer.pdf"))

const extensions = {  // Ye extension ke hisab se humko files ko different folders mai arrange karna hai
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpeg",".jpg",".png",".gif"],
    Software:[".exe"]
};
// Can we loop over objects
for(let key in extensions){
    console.log(key);
}