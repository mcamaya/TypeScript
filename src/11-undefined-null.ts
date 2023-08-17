(() => {
//  let myNumber:number;
//  let myString: string;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 7423;

  let myString: string | undefined = undefined;
  myString = 'uiqwdh';

  function hiV1(name: string | null){
    let hello = 'Hola ';
    if (name){
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hiV2(name: string | null){
    let hello = 'Hola ';
    hello += name?.toLowerCase() ?? 'nobody'; //optional chaining '?'
    console.log(hello);
  }

  hiV1('Cami');
  hiV1(null);

  hiV2('Cami');
  hiV2(null);

})();
