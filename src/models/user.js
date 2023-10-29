import mongoose from "mongoose";

const UserScheme = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

const User = mongoose.models.User || mongoose.model("User", UserScheme);
export default User;
