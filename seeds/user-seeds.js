const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'userone',
        email: 'userone@email.com',
        password: 'password123'
    },
    {
        username: 'usertwo',
        email: 'usertwo@email.com',
        password: 'password321'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;

