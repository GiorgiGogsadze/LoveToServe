const Order = require("../models/orderModel");
const catchAssync = require("../utils/catchAssync");
const factory = require("./handlerFactory");

exports.getAllOrders = factory.getAll(Order);
let targetProxy = {};

exports.addOrder = catchAssync(async (req, res, next) => {
  const newDoc = await Order.create(req.body);
  targetProxy.hasnew = true;
  res.status(201).json({
    status: "success",
    data: newDoc,
  });
});

exports.deleteOrder = factory.deleteOne(Order);

exports.getNewOrders = catchAssync(async (req, res, next) => {
  targetProxy = new Proxy(
    {},
    {
      set: async function (target, key, value) {
        const newOrders = await Order.find({
          date: { $gte: req.params.date },
          _id: { $ne: req.params.id },
        });
        try {
          res.status(200).json({
            status: "success",
            results: newOrders.length,
            data: newOrders,
          });
        } catch (err) {
          console.log(err);
          if (err.code !== "ERR_HTTP_HEADERS_SENT") {
            res.status(404).json({ status: "fail" });
          }
        }
      },
    }
  );
});
