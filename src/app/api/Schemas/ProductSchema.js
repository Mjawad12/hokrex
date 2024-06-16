import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  productName: { type: String, require: true },
  productPrice: { type: Number, require: true },
  productCategory: { type: String, require: true },
  productDescription: { type: String, require: true },
  productHeading: { type: String, require: true },
  productImg: { type: String, require: true },
  productColors: { type: Array, require: true },
  productSizes: { type: Array, require: true },
  slug: { type: String },
  reviews: {
    type: Array,
    name: String,
    designation: String,
    phone: String,
    email: String,
    rating: Number,
    review: String,
  },
  customizable: Boolean,
});

export default mongoose.models.Product || mongoose.model("Product", Schema);
