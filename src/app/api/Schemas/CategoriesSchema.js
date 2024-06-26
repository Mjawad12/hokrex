import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: String,
  items: Number,
  link: String,
});

export default mongoose.models.Categories ||
  mongoose.model("Categories", Schema);
