const mongoose = require("mongoose");

const propertyModel = mongoose.Schema({
  address: {
    formatted: String,
    location: {
      latitude: Number,
      longitude: Number,
    },
  },
  details: [
    {
      id: Number,
      title: String,
      items: [
        {
          id: Number,
          name: String,
        },
      ],
    },
  ],
});

var Property = (module.exports = mongoose.model("property", propertyModel));

module.exports.get = function (callback, limit) {
  Property.find(callback).limit(limit);
};
