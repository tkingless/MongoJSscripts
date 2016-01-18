db = connect("localhost:27017/edxapp");

var array = db.modulestore.find({"_id.course": "LTTC002", "_id.category": "video"}).pretty();
var text = JSON.stringify(array, null, '\t');

//print(text);
print(array);

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
