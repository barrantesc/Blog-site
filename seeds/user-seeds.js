const { User } = require('../models');

const userData = [
    {
        username: "KKirigaya",
        email: "KKirigaya@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "KMakise",
        email: "KMakise@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "UItachu",
        email: "UItachu@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "KilluaZ",
        email: "KilluaZ@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "LeviA",
        email: "LeviA@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "UNaruto",
        email: "UNaruto@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;