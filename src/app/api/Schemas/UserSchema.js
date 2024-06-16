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
    order: {
      type: Object,
      orderType: String,
      active: Boolean,
      trackingID: Number,
      deliveryCharges: Number,
      unpaidAmount: Number,
      unpaidAmount: Number,
      product: Number,
    },
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
      def: Boolean,
      bankName: String,
    },
  },
  wishlist: {
    type: Array,
    wish: {
      type: Object,
      productName: String,
      productImg: String,
      slug: { type: String },
      customizable: Boolean,
    },
  },
  verification: { type: Boolean, default: false },
  otp: Number,
});

export default mongoose.models.Users || mongoose.model("Users", Schema);
