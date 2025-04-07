use iti
use intake45//create db appear whene write collection
show dbs
db.dropDatabase()
use iti
db.track.renameCollection("tracks")
db.tracks.storageSize()
db.tracks.stats()
db.tracks.find()
db.tracks.remove()
db.createCollection("track")
db.createCollection("trainee")
show collections
db.getCollectionNames()
db.stats()
// db.storageSize()
db.getCollectionInfos({"name":"track"})

db.track.insertMany(
[
    {"_id":1,"name":"Open source"},
    {"_id":2,"name":"Java"},
    {"_id":3,"name":"AI"},
    {"_id":4,"name":"IOT"},
]
)
use iti
db.tracks.remove(
    {"name":{$eq:"IOT"}
        })
        
//find

    
    
    