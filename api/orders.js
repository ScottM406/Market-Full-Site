const express = require("express");
const prisma = require("../prisma");
const { authenticate } = require("./auth");
const router = express.Router();
module.exports = router;

router.get("/", authenticate, async (req, res, next) => {
  try {
  const orders = await prisma.order.findMany({
    where: { customerId: req.user.id },
  })
  res.json(orders);
} catch (e) {
  next(e);
}
});

router.post("/", authenticate, async (req, res, next) => {
  const date = new Date().toISOString().split("T")[0];
  try {
    const order = await prisma.order.create({
      data: {
        date: date,
        note: `${req.user.username}'s order placed ${date}`,
        customerId: req.user.id,
        items: { connect: req.body.items.map(id => ({ id })) },
      },
    });
    res.status(201).json(order);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", authenticate, async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await prisma.order.findUniqueOrThrow({
      where: { id: Number(id)},
      include: { items: true},
    })
    if (order && order.customerId === req.user.id) {
      res.json(order);
    } else {
      next({ status: 404, message: `Forbidden. This order was not placed by ${req.user.username}`})
    }
  } catch (e) {
    next(e);
  }
});