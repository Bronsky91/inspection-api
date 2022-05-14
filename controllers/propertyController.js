require("dotenv").config();

const Property = require("../models/propertyModel");

exports.index = async (req, res) => {
  try {
    const properties = await Property.find();

    res.json(properties);
  } catch (error) {
    res.status(400).send({ error });
  }
};

exports.new = async (req, res) => {
  try {
    const { address, details } = req.body;

    const newProperty = new Property();

    newProperty.address = address;
    newProperty.details = details;

    const property = await newProperty.save();

    res.json(property);
  } catch (error) {
    res.status(400).send({ error });
  }
};

exports.get = async (req, res) => {
  try {
    const { _id } = req.query;
    const property = await Property.findById(_id);
    if (property) {
      res.json(property);
    } else {
      res.send(404);
    }
  } catch (error) {
    res.status(400).send({ error });
  }
};

exports.edit = async (req, res) => {
  try {
    const { address, details, _id } = req.body;

    const property = Property.findById(_id);
    if (property) {
      await Property.updateOne(
        { _id },
        {
          $set: {
            address,
            details,
          },
        }
      );

      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(400).send({ error });
  }
};

exports.remove = async (req, res) => {
  try {
    const { _id } = req.body;
    await Property.deleteOne({ _id });

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send({ error });
  }
};
