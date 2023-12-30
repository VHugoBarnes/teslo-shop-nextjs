import { initialData } from "./seed";
import { countries } from "./seed-countries";
import { prisma } from "../lib/prisma";

async function main() {
  const { categories, products, users } = initialData;

  await prisma.userAddress.deleteMany();
  await prisma.country.deleteMany();
  await prisma.user.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  //? Create countries
  await prisma.country.createMany({
    data: countries
  });

  //? Create users
  await prisma.user.createMany({
    data: users
  });

  //? Create catrogies
  const categoriesData = categories.map((name) => ({ name }));
  await prisma.category.createMany({
    data: categoriesData
  });

  //* Bring categories
  const categoriesDB = await prisma.category.findMany();
  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>);

  //? Create products
  products.forEach(async (product) => {
    const { type, images, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type]
      }
    });

    const imagesData = images.map(image => ({
      url: image,
      productId: dbProduct.id
    }));
    //? Create product image
    await prisma.productImage.createMany({
      data: imagesData
    });
  });

  console.log("Seed executed");
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();