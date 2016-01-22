db = connect("localhost:27017/edxapp");
print(db.getName());

var cursor = db.modulestore.structures.find();

while(cursor.hasNext()) {
  var obj = cursor.next();
  var id = obj._id;
  //print(tojson(id));
  print(tojson(obj));
}
