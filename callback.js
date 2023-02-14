var searchIndex = (data, callback) => {
  for (var i = 0; i < data.table.length; i++) {
    if (data.table[i] == data.filter) {
      return callback(null, i);
    }
  }
  /// add test
  return callback(
    "impossible de trouver index element " + data.filter + " du table"
  );
};

var table = [2, 5, 6, 7, 9];
var filter = 75;
var data = { table: table, filter: filter };

searchIndex(data, (error, result) => {
  if (error) console.error(error);
  if (result)
    console.log("index elemnt " + data.filter + "du table est", result);
});
