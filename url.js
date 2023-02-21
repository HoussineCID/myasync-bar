var url = require("url");
var myurl =
  "http://user1:password@www.exemple.com:8080/page.php?key=value&key2=value2#anchor";

///parser url

var urlParse = url.parse(myurl);
console.log(urlParse);

urlParse.host = "new.host.com";
delete urlParse.search;
delete urlParse.hash;
var newHostUrl = url.format(urlParse);
console.log(newHostUrl);
