db = connect("localhost:27017/edxapp");

var array = db.modulestore.distinct("metadata.transcripts.zh")
var text = JSON.stringify(array, null, '\t');

print(text);

//examples for queries
/*
db = connect("localhost:27017/test");
var cursor = db.unicorns.find({gender : "m"});
var total = 0;
while(cursor.hasNext()) {
  var obj = cursor.next();
  total += (obj.hits || 0);
}
print(total);
*/
