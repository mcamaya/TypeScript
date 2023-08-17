(() => {

  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = '55555';

  const rta = (myDynamicVar as number).toLocaleString();
  console.log(typeof rta);

  myDynamicVar = '121212';
  const rta2 = (<number>myDynamicVar).toLocaleString();
  console.log(typeof rta2);

})();
