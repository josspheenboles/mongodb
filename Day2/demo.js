show databases
use iti
db.createCollection('trainee')
db.createCollection('track')
show collections
db.getCollectionNames()
db.getCollectionInfos({"name":"track"})
db.track.drop()
db.track.insertOne({"name":"ali"})
//insert track
db.track.insertOne(
{"_id":4,"name":"OpenSource","plplp":"habel"}
)
//insert tracks
db.track.insertMany(
[
{"_id":1,"name":"OpenSource"},
{"_id":2,"name":"PWD"},
{"_id":3,"name":"UI-UX"},
]
)
//show tracks
db.track.find().pretty()
//order
db.track.find().sort({"name":1}).pretty()
db.track.find().sort({"name":-1}).pretty()
//projection
db.track.find(
{},
{"name":1})
//filiter Comparisons operater
db.track.find({"_id":{$gt:1}})
//filiter Logical operater
db.track.find(
{$and : [
{"_id":{$gt:1}},
{"_id":{$lt:4}},
]})

//filiter Element operater