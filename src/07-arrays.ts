(() => {
  let prices = [1,5,9, 'hola', true];
//  prices.push(false);
//  prices.push('sajasas');
//  prices.push({});

  prices.push(68);
  prices = [1,2,3];
  console.log('prices', prices);

  let products: (number | string | boolean | Object)[] = ['hola', true];
  products.push(12);
  products.push({});
  products.push([]);
  console.log('products', products);

  let numbers = [1, 2, 3, 4, 5];
  let mapped = numbers.map(num => num * 2);
  console.log(mapped);

})();
