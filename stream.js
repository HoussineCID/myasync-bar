var fs = require("fs");
var https = require("https");

var requestAndSave = (data, callback) => {
  var writeStream = fs.createWriteStream("photo2.jpg");

  https
    .get(data.url, (response) => {
      // remplir data recuperer dans writeStream > photo.jpg
      response.pipe(writeStream);
    })
    .on("error", (error) => {
      callback(error);
    });
};

var data = {
  url: "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg",
  file: "photo2.jpg",
};

requestAndSave(data, (error) => {
  if (error) {
    console.error(error);
  }
});
