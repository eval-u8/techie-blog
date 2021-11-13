const sequelize = require('../config/connection');
const userSeed = require('./userjson.json');
const {User} = require("../models");

const dataSeed = async () => {
    await sequelize.sync({force:true})
    await User.bulkCreate(userSeed);

    console.log(`Seed completed`);
    process.exit(0)
};

dataSeed()