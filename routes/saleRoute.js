const express = require("express");
const {
  createTargetSale,
  getSaleById,
  targetSalesOfChild,
  targetSalesOfParent,
} = require("../controllers/saleController");

const router = express.Router();

router.post("/createTargetSale", createTargetSale);
router.route("/targetSale").get(getSaleById);
router.route("/targetSalesOfChild").get(targetSalesOfChild);
router.route("/targetSalesOfParent").get(targetSalesOfParent);

module.exports = router;
