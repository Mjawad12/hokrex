import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  name: String,
  password: String,
  phone: String,
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
});

export default mongoose.models.Users || mongoose.model("Users", Schema);
