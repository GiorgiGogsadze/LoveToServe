const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  orders: [
    {
      amount: { type: Number, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      ingredients: { type: String },
    },
  ],
  table: { type: Number, required: true },
  date: { type: Number, required: true },
});

// orderSchema.index({ date: -1 });

orderSchema.pre(/^find/, function (next) {
  this.sort("-date");
  next();
});

const Order = mongoose.model("Order", orderSchema);
// (async () => await Order.deleteMany())();
module.exports = Order;
