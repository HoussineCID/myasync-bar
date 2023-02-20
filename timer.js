const baz = () => console.log("baz");
const foo = () => console.log("foo");
const zoo = () => console.log("zoo");
const start = () => {
  console.log("start");
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve("bar");
  }).then((resolve) => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};
start();

//timeout_vs_immediate.js;
const fs = require("fs");
const coucou = () => console.log("coucou");
fs.readFile(__filename, () => {
  console.log("first");
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  setImmediate(() => {
    console.log("immediate");
  });
  process.nextTick(coucou);
});
