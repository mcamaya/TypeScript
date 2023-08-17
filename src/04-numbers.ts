(() => {

  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 20;
  customerAge = customerAge + 1
  console.log('customerAge', customerAge);

  let productStock: number;

  //Variable 'productStock' is used before being assigned.
/*   console.log('productStock', productStock);
  if(productStock > 10) {
    console.log('Is greater');
  } */

  let discount = parseInt('888'); //infiere tipo nombre
  console.log('discount', discount);

  let hex = 0xfff;
  console.log('hex', hex);

  let bin = 0b1010;
  console.log('bin', bin);

})();
