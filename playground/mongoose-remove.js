const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove()

// Todo.findByIdAndRemove()

Todo.findByIdAndRemove("5b27de6f037b67563a0b4442").then(todo => {
  console.log(todo);
});
