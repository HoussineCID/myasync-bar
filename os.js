var os = require("os");

console.log("Architecture : ", os.arch());
console.log("Nombre CPU : ", os.cpus().length);
console.log("Hostname : ", os.hostname());
