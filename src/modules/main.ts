import { addProduct, products, calcStock } from "./product.service";

addProduct({
    title: 'Product 1',
    createdAt: new Date(),
    stock: 12
});
addProduct({
    title: 'Product 2',
    createdAt: new Date(),
    stock: 52,
    size: 'L'
});

const stock = calcStock();
console.log(stock);
console.log(products);