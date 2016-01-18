db = connect("localhost:27017/edxapp");

var cursor = db.modulestore.find({"_id.course": "LTTC002", "_id.category": "video"});

while(cursor.hasNext()) {
  var obj = cursor.next();
  var id = obj._id;
  //print(tojson(id));
  print(tojson(obj));
}
