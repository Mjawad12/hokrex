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
      status: String,
      active: Boolean,
      trackingID: String,
      orderID: mongoose.Types.ObjectId,
      deliveryCharges: Number,
      unpaidAmount: Number,
      product: String,
      deliveryDate: String,
      orderFiles: Array,
      name: String,
      email: String,
      phone: String,
      county: String,
      firstName: String,
      fullName: String,
      Address: String,
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
