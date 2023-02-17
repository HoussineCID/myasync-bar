const process = require("process");

console.log("salut");
setTimeout(() => {
  console.log("ca va ?");
  console.log("j'ai fini ");
}, 0);

process.on("beforeExit", () => {
  console.log("cest fini notre code");
});
