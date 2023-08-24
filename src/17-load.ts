import _ from 'lodash';

const data = [
    {
        username: 'cami',
        role: 'admin'
    },
    {
        username: 'valen',
        role: 'seller'
    },
    {
        username: 'nico',
        role: 'seller'
    },
    {
        username: 'andres',
        role: 'customer'
    }
];

const rta = _.groupBy(data, item => item.role);
console.log(rta);
