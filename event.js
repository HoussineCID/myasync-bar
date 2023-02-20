var EventEmitter = require("events");
// var EventEmitter = require("EventEmitter");
var emitter = new EventEmitter();

emitter.on("change", () => {
  console.log("first event change");
});
emitter.on("change2", (message) => {
  console.log("second event with message : ", message);
});
emitter.on("change3", (type, message) => {
  console.log("therd event with (type , message) : ", type, message);
});
emitter.emit("change");
emitter.emit("change2", "hello les amis");
emitter.emit("change3", "error", " il ya une erreur");
