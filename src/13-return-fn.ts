(() => {
  const calcTotal = (precios: number[]): string => {
    let total: number = 0;
    precios.forEach(item => {
      total += item;
    });
    return total.toString();
  }

  const printTotal = (precios: number[]): void => {
    const rta = calcTotal(precios);
    console.log(`El total es ${rta}`);
  }

  const rta = printTotal([1,2,3,45,8,5,25,8]);
})();