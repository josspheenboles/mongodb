//Display all documents in instructors collection
    //Basic Query to Find All Documents
    db.instructor.find({})
    //Formatted Output (Pretty Print)
    db.instructor.find({}).pretty()
    //Count All Documents
    db.instructor.countDocuments({})
    //Display all instructors with salaries greater than 4000 (only show firstName and salary)
    db.instructor.find(
    {salary:{$gt:4000}},
    {firstName:1,_id:0})
    //Display all instructors with ages less than or equal 25.
    db.instructor.find(
    {
        age:{$lte:25}
    })
    //Display all instructors with city mansoura and sreet number 10 or 14 only display (firstname,address,salary).
    db.instructor.find(
    {
        address.city:{$eq:"mansoura"},
        address.street:{$in:[10,14]},
        
    }
    ,
    {firstName:1,
        address:1,
        salary:1,
        _id:0
     })
     
     //Display all instructors that have js and jquery in their courses (both of them not one of them).
     db.instructor.find(
     {
         courses:{$all:["js","jquery"]}
     },{}
     )
    //Display number of courses for each instructor and display first name with number of courses.
     db.instructor.aggregate([
          {
            $project: {
              firstName: 1,
              numberOfCourses: { $size: "$courses" },
              _id: 0  // Exclude the _id field
            }
          }
        ])
        //Write mongodb query to get all instructors that have firstName and
        // lastName properties , sort them by firstName ascending then by
        // lastName descending and finally display their data FullName and age
         db.instructo.find(
          {
              firstName:{$exists:true},
              lastName:{$exists:true},
              },
              {FullName: { $concat: ["$firstName", " ", "$lastName"] },
                  age:"$age"
                  }) .sort({lastName:-1})
         
          //Or
            db.instructo.aggregate(
                {$match:
                    {
                        firstName:{$exists:true},
                       lastName:{$exists:true},
                       
                    }
                  },
                {$sort:
                    {lastName:-1}
                    },
                {$project:
                     {FullName: { $concat: ["$firstName", " ", "$lastName"] },
                  age:"$age"
                  }
                    })
                    
   //Delete instructor with first name ?ebtesam? and has only 5 courses in courses Array(
  db.instructor.deleteOne(
                    {
        firstName: "ebtesam",
        courses: { $size: 5 }
})
//Add active property to all instructors and set its value to true.
db.instructor.updateMany(
    {
        active:{$exists:false}
    },
    {
        $set:{active:true}
    }
)
//Change ?EF? course to ?jquery? for ?mazen mohammed? instructor (without knowing EF Index in courses array)
    db.instructors.updateOne(
  { 
    firstName: "mazen",
    lastName: "mohammed",
    courses: "EF"  // Ensures we only match documents that contain "EF"
  },
  {
    $set: { "courses.$": "jquery" }  // $ positional operator updates the matched element
  }
)
  
 //Add jquery course for ?noha hesham?.
  db.instructors.updateOne(
  { firstName: "noha", lastName: "hesham" },
  { $push: { courses: "jquery" } }
)
  
//Remove courses property for ?ahmed mohammed ? instructor
  db.instructors.updateOne(
  { firstName: "mazen", lastName: "mohammed" },
  { $unset: { courses: "" } }
)
  //
  // Before update
db.instructors.find(
  { courses: { $size: 3 } },
  { firstName: 1, lastName: 1, salary: 1, courses: 1, _id: 0 }
)

//Decrease salary by 500 for all instructors that has only 3 courses in their list ($inc)
db.instructors.updateMany(
  {
    courses: { $size: 3 }  // Matches documents with exactly 3 courses
  },
  {
    $inc: { salary: -500 }  // Decreases salary by 500
  }
)
  //Rename address field for all instructors to fullAddress.
  db.instructors.updateMany(
  {}, // Empty filter to match all documents
  {
    $rename: { "address": "fullAddress" }
  }
)
  
  //Change street number for noha hesham to 20
  db.instructors.updateOne(
  { firstName: "noha", lastName: "hesham" },
  { $inc: { "address.street": 10 } }
)
  //Average Salary by City with Course Count
  db.instructors.aggregate([
  {
    $group: {
      _id: "$address.city",
      averageSalary: { $avg: "$salary" },
      totalInstructors: { $sum: 1 },
      averageCourses: { $avg: { $size: "$courses" } }
    }
  },
   {
    $sort: { averageSalary: -1 }
  },
   {
    $project: {
      _id: 0,
      city: "$_id",
      averageSalary: { $round: ["$averageSalary", 2] },
      totalInstructors: 1,
      averageCourses: { $round: ["$averageCourses", 1] }
    }
  }
  
  //Text Search with Array Filtering
  db.instructors.find({
  $or: [
    { firstName: /^m/i },  // First names starting with 'm'
    { courses: { $in: ["js", "jquery"] } }
  ],
  salary: { $gt: 4000 }
}).sort({ lastName: 1 })
  ])
  
// Complex Update with Multiple Conditions
db.instructors.updateMany(
  {
    age: { $lt: 25 },
    courses: { $not: { $elemMatch: { $in: ["react", "angular"] } } }
  },
  {
    $push: { courses: "fundamentals" },
    $inc: { salary: 200 },
    $set: { lastUpdated: new Date() }
  }
)
  //