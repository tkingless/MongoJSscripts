db = connect("localhost:27017/edxapp");
print(db.getName());

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
