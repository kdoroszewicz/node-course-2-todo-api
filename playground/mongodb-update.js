// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, database) => {
    const db = database.db("TodoApp");
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection("Todos")
    //   .findOneAndUpdate(
    //     {
    //       _id: new ObjectID("5b251141037b67563a0b0f21")
    //     },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     },
    //     {
    //       returnOriginal: false
    //     }
    //   )
    //   .then(result => console.log(result));
    db.collection("Users")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5b250f59b6ccbe1fc8650a92")
        },
        {
          $set: {
            name: "Kamil"
          },
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => console.log(result));

    // database.close();
  }
);
