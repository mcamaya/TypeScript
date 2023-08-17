(()=>{

  // Alias
  type UserID = string | number | boolean

  // Litreral types
  type Sizes = ('S' | 'M' | 'L' | 'XL')

  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'S';
  shirtSize = 'L';

  let myUserId: UserID;
  function greeting (myUserId: UserID, size: Sizes) {
    if(typeof myUserId === 'string'){
      console.log(`Acabas de ingresar el texto '${myUserId.toLowerCase()}'`);
    }
  }

  greeting(111, 'XL');

})();
