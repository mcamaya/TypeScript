(() => {
    const login = (data: {email: string, password: number}) => {
        console.log(data.email, data.password);
    }
    //login('cami@cami.com', '12345'); No mandar parámetro por parámetro

    login({
        email: 'cami@cami.com',
        password: 12345
    });

    const products: any[] = [];

    const addProduct = (data: {
        title: string,
        createdAt: Date,
        stock: number,
        size?: 'S' | 'M' | 'L' | 'XL'
    }) => {
        products.push(data);
    }

    addProduct({
        title: 'Product 1',
        createdAt: new Date(),
        stock: 12
    });
    addProduct({
        title: 'Product 2',
        createdAt: new Date(),
        stock: 52,
        size: 'L'
    });

    console.log(products);
    
})();