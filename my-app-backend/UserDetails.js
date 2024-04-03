const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    phone: String,
    password: String,
  },
  {
    collection: "Users",
  }
);

mongoose.model("UserInfo", UserDetailsSchema);
