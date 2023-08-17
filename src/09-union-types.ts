(() => {
  let myUserId: string | number;
  myUserId = 123;
  myUserId = "123";

  function greeting (texto: string | number) {
    if(typeof texto === 'string'){
      console.log(`Acabas de ingresar el texto '${texto.toLowerCase()}'`);
    } else {
      console.log(`Acabas de ingresar el numero '${texto.toFixed(1)}'`);
    }
  }

  greeting('aasasas');
  greeting(231.386451);
})();
