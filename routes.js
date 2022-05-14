const express = require("express");
const router = express.Router();

const propertyController = require("./controllers/propertyController");

router.route("/properties").get(propertyController.index);

router
  .route("/property")
  .get(propertyController.get)
  .post(propertyController.new)
  .patch(propertyController.edit)
  .delete(propertyController.remove);

module.exports = router;
