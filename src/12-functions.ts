(() => {
  type Sizes = ('S' | 'M' | 'L' | 'XL')

  const createProductToJson = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {

    return {
      title,
      size,
      stock,
      createdAt
    }

  }

  const product1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log(product1);
  console.log(product1.title);
  console.log(product1.size);
  console.log(product1.stock);

})();
