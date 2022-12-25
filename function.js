const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    check: x => x,
    createUser: () => {
        const user = { firstName: 'Kim' };
        user['lastName'] = 'Martin';
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'err'),
};

module.exports = functions;