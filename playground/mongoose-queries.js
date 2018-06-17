const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// var id = "5b268455a0012c0d60954e3a11";

// if (!ObjectID.isValid(id)) {
//   console.log("Id not valid");
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("Id not found");
//     }
//     console.log("Todo by ID", todo);
//   })
//   .catch(e => console.log(e));

const userId = "5b251fe23b1b262538faa625";

User.findById(userId).then(
  user => {
    if (!user) {
      return console.log("Id not found");
    }
    console.log("User by ID", user);
  },
  e => {
    console.log(e);
  }
);
