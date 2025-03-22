import createItem from "./services/item.js";

const cart = []

console.log("Welcome to your Shopee Cart");

const item1 = await createItem("RTX 5090", 24000.00, 1);
const item2 = await createItem("ryzen 9 7950x3d", 4400.00, 1);
const item3 = await createItem("Asus TUF Gaming X670E-PLUS", 2100.00, 1);
const item4 = await createItem("Memória RAM, 16GB, 4800MHz, DDR5", 400.00, 2);

console.log(item1, item2, item3, item4.subtotal())
