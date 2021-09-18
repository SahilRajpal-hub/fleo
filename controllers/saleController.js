const companySaleSchema = require("../models/companySale");
const asyncHandler = require("express-async-handler");

// @desc     Target Sale
// @route    Post /api/companySale
// @access    Public (for now)

const createTargetSale = asyncHandler(async (req, res) => {
  let { targetSale, totalSale, name, parent } = req.body;
  const childs = [];

  let saleObject = {};

  if (parent) {
    saleObject = new companySaleSchema({
      targetSale,
      totalSale,
      name,
      parent,
      childs,
    });
    const saleObj = await saleObject.save();

    let parentSale = await companySaleSchema.findById(parent);
    while (parentSale) {
      //   console.log(parentSale);
      parentSale.childs.push(saleObject);
      parentSale.targetSale = parentSale.targetSale + targetSale;
      parentSale.totalSale = parentSale.totalSale + totalSale;
      await parentSale.save();
      parent = parentSale.parent;
      parentSale = await companySaleSchema.findById(parent);
    }

    res.status(201).json(saleObj);
  } else {
    // genesis block
    saleObject = new companySaleSchema({
      name,
      childs,
    });
    const saleObj = await saleObject.save();
    res.status(201).json(saleObj);
  }
});

const getSaleById = async (req, res) => {
  let saleId = req.body.saleId;
  const saleObj = await companySaleSchema.findById(saleId);
  res.status(201).json(saleObj);
};

const targetSalesOfChild = async (req, res) => {
  let saleId = req.body.saleId;
  const saleObj = await companySaleSchema.findById(saleId);
  let parent = saleObj.parent;
  let parents = [];
  while (parent) {
    const prtObj = await companySaleSchema.findById(parent);
    parents.push(prtObj);
    parent = prtObj.parent;
  }

  res.status(201).json(parents);
};

const targetSalesOfParent = async (req, res) => {
  let saleId = req.body.saleId;
  const saleObj = await companySaleSchema.findById(saleId);
  let childs = [];
  let childIds = saleObj.childs;

  while (childIds.length != 0) {
    let childId = childIds[0];
    childIds.shift();

    const childObj = await companySaleSchema.findById(childId);
    childs.push(childObj);
  }

  res.status(201).json(childs);
};

module.exports = {
  createTargetSale,
  getSaleById,
  targetSalesOfChild,
  targetSalesOfParent,
};
