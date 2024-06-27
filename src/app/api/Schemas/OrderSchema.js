import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  county: String,
  firstName: String,
  fullName: String,
  Address: String,
  orderFiles: Array,
  payType: String,
  method: {
    type: Object,
    name: String,
    cvc: String,
    cardNumber: Number,
    expiryDate: String,
    def: Boolean,
    bankName: String,
  },
  items: Array,
});

export default mongoose.models.Orders || mongoose.model("Orders", Schema);
