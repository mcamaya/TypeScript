(() => {

  //tipado
  let productName :string = 'Product 1'; //explícito
  let productPrice = 1200; //inferido

  //solo podemos renombrar las variables con el mismo tipo de dato con el que fueron inicializadas por primera vez
  productName = 'changed'

})();
