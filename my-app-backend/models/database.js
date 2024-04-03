const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/My-App");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function () {
  console.log("Connected to MongoDB");
});

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    phone: String,
  },
  {
    collection: "Users",
  }
);
const UsersModel = mongoose.model("Users", UserSchema);
module.exports = UsersModel;
