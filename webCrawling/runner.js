//ultimate csv format goal:
//recorded, matchid, type, stage, scores, corner(if there is CHL), {odds data}

//file naming: matchid_teams.csv

load('csv.js');

db = connect("localhost:27017/MongoProdWebcrawling");
print(db.getName());

helloWorld();

//Rundown:
//1. scan Match event that either commence or actualcommence less than four hours (of course commence time have priorty), then these are targets of runner
//2. 
// . On the other hand, check current directory of files starting with the matchid, get matchid and get the lastMod time, if 4 hrs ago, mv it to today history folder


//unit functions
//1.load filenames
//2.create folders
//3. read,compare,write time
//4.csv handling




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

/*
print(db.getName());

var cursor = db.modulestore.definitions.find();

while(cursor.hasNext()) {
  var obj = cursor.next();
  var id = obj._id;
  //print(tojson(id));
  print(tojson(obj));
}
*/

/*
print(db.getName());

var cursor = db.modulestore.structures.find();

while(cursor.hasNext()) {
  var obj = cursor.next();
  var id = obj._id;
  //print(tojson(id));
  print(tojson(obj));
}
*/
