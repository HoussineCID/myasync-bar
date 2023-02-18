var fs = require("fs");
const { join } = require("path");
// //read file sync
var displayFile = fs.readFileSync("./file.txt", "utf8"); // utf8 uncoding au lieux de toString()
console.log(displayFile);

//read file async
fs.readFile("./file.txt", (error, result) => {
  //console.log(result.toString());
});

//copy content file from other file
fs.copyFile("./file.txt", "./fileCopy.txt", (error) => {
  if (error) {
    console.log("opsss error ");
  } else {
    console.log("text copyed fini");
  }
});
//watch
fs.watch("./", (eventType, filename) => {
  console.log(eventType);
  console.log(filename);
});
