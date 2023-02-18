var readline = require("readline");

var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("What is your age ?");
rl.prompt();
rl.on("line", (age) => {
  console.log(`your age is : ${age}`);
  rl.close();
});
