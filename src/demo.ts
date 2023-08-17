//@ts-check
export interface Welcome {
  id: number
  title: string
  price: number
  description: string
  category: Category
  images: string[]
}

export interface Category {
  id: number
  name: Name
  image: string
  keyLoremSpace?: KeyLoremSpace
}

export enum KeyLoremSpace {
  Fashion = 'fashion',
}

export enum Name {
  Clothes = 'Clothes',
  Electronics = 'Electronics',
  Furniture = 'Furniture',
  Others = 'Others',
  Shoes = 'Shoes',
}


(async ()=> {
  const myCart: Welcome[] = [];
  const products: Welcome[] = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET'
    });
    const data = await rta.json();
    products.concat(data);
  }
  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price;
    }
    return total;
  }
  function addProduct(index:any) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  const rta = {...person, limit};
  console.log(rta);
});

/* (()=> {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      mehtod: 'GET'
    });
    const data = await rta.parseJson();
    products.concat(data);
  }
  function getTotal() {
    const total = 0;
    for (const i = 0; i < products.length(); i++) {
      total += products[i].prize;
    }
    return total;
  }
  function addProduct(index) {
    if (getTotal <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProducto(1);
  addProducto(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  const rta = person +  limit;
  console.log(rta);
}); */
