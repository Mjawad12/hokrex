import mongoose, { mongo } from "mongoose";

const Schema = new mongoose.Schema({
  productName: { type: String, require: true },
  productPrice: { type: Number, require: true },
  productCategory: { type: String, require: true },
  productDescription: { type: String, require: true },
  productHeading: { type: String, require: true },
  productImg: { type: String, require: true },
});

export default mongoose.models.Product || mongoose.model("Product", Schema);
