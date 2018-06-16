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
    //   .deleteMany({ text: "Eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection("Todos")
    //   .deleteOne({ text: "Eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection("Todos")
    //   .findOneAndDelete({ completed: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection("Users")
    //   .deleteMany({ name: "Kamil" })
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection("Users")
      .findOneAndDelete({ _id: new ObjectID("5b23fb7936fe84182ce98efb") })
      .then(results => console.log(JSON.stringify(results, undefined, 2)));

    // database.close();
  }
);
