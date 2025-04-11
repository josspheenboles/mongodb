use iti
// db.createCollection("test",validationLevel:"modrate")
db.track.find()
db.track.insertOne({})
// db.track.updateOne
// (
// {"_id":
//     {$eq:1}
//     },
// {
//    $set:{ "name":"OS","_id":1000}
// }
// )
// db.track.replaceOne(
// {"_id":{$eq:1}},
// {
//     "name":"open Source",
//     "courses":["c","java","php","ruby"]
//     
//    }
// )
// db.track.updateOne(
// {"_id":{$eq:1}},
// {
//     $addToSet:{"courses":"python"}
//     }
// 
// )

db.track.find().constructor.name
db.track.find().toArray().constructor.name

db.track.find().toArray().forEach(
track => {
    printjson(track._id); // or process each track
}
);
//indexs --->meta data (zetab)
//delete from table
// db.track.deleteMany(
// {}
// )
// //delete indexs,valiation
// //drop table
// db.track.drop()
db.track.find({_id:1})
// db.track.aggregate(
// $match:{}
// )
//display fname+lname where has field fname & lname
db.instructor.find(
{
   
    firstName:{$exists:true},
    lastName:{$exists:true}
    }
,
{
    "fullName":{$concat:["$firstName"," ","$lastName"]
        }
    })
 //aggreg
    db.instructor.aggregate(
    {$match:{   firstName:{$exists:true},
    lastName:{$exists:true}
 }},
    {$project:{   "fullName":{$concat:["$firstName"," ","$lastName"]}}}
   )
db.instructor.updateMany(
    {"courses":"js"},
    {$set:{
        "courses.$":"Java Script"}}
    )
db.instructor.updateMany(
        {},
        {
            $inc:{"salary":-100}})
            
//display city,avg salary
            
            
// //courses count for each instr fname,course CountDownLatch
// field:1--->asec
// field:-1--->desc
// field:0
// db.track.aggregate(
// [
// {
//     $project:
//     {
//         _id:1
//         }
// }
// ]
// )
// db.instructor.aggregate(
// [
// {$project:
//     {
//         firstName:1,
//         numberofcurse:{$size:"$courses"},
//         "_id":0
//     }
// }
// ])
// db.instructor.aggregate([
// {
// $project:{
//     firstName:1
//     }
// 
// }])
// 
// 
// 