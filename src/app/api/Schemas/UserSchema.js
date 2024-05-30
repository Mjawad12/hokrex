import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  name: String,
  password: String,
  phone: String,
  otherphone: String,
  email: String,
  orders: {
    type: Array,
    default: [],
  },
  Date: {
    type: String,
    default: new Date().toDateString(),
  },
  address: String,
  paymentMethods: Array,
  verification: { type: Boolean, default: false },
  otp: Number,
});

export default mongoose.models.Users || mongoose.model("Users", Schema);
