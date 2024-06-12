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
  paymentMethods: {
    type: Array,
    method: {
      type: Object,
      name: String,
      cvc: String,
      cardNumber: Number,
      expiryDate: String,
    },
  },
  verification: { type: Boolean, default: false },
  otp: Number,
});

export default mongoose.models.Users || mongoose.model("Users", Schema);
