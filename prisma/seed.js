const prisma = require("../prisma");
const { faker } = require("@faker-js/faker");

const seed = async (numProducts = 40) => {
  const products = Array.from({length: numProducts}, () => ({
    title: faker.food.adjective() + " " + faker.food.ingredient(),
    description: faker.food.description(),
    price: Number(faker.finance.amount({ min: 2, max: 10, dec: 2})),
  }));
  await prisma.product.createMany({ data: products });
  await prisma.user.create({ 
    data: { 
      id: 999, 
      username: "Test User", 
      password: "Test Password" 
    }
  });
  await prisma.order.create({ 
    data: {
      date: "1200 BC", 
      note: "This order is fake. It is for test purposes only",
      customerId: 999,
      items: { connect: { id: 5 } },
      id: 999,
    }
  });
};

seed()
  .then(async () => await prisma.disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });