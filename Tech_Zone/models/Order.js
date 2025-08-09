const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      }
    }
  ],
  Total_Order_Price: {
    type: Number,
  },
  ShippingAddress: {
    details: String,
    city: String,
    PhoneNumber: Number,
  },
  ShippingPrice: {
    type: Number,
    default:50
  },
  paymentMethodType: {
    type: String,
    enum: ['card', 'cash'],
    default: 'cash'
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false
  },
  paidAt: {
    type: Date
  },
  isDelivered: {
    type: Boolean,
    default: false
  },
  deliveredAt: {
    type: Date
  }
}, { timestamps: true });

const orderModel = mongoose.model('Order', orderSchema);
module.exports = orderModel;

