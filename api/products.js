const express = require("express");
const prisma = require("../prisma");
const { authenticate } = require("./auth");
const router = express.Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
  const products = await prisma.product.findMany();
  res.json(products);
  } catch {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const isInUserOrder = req.user
  ? { where: { customerId: req.user.id} }
  : false;
  try {
    const product = await prisma.product.findUniqueOrThrow({
      where: { id: Number(id) },
      include: { orders: isInUserOrder },
    });
    res.json(product);
  } catch (e) {
    next(e);
  }
});