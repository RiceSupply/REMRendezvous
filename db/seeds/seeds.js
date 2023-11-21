const sequelize = require('../../config/connection');
const { User, SleepCycle } = require('../models');

const userData = require('./userData.json');
const sleepCycleData = require('./sleepCycleData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    for (const sleepCycle of sleepCycleData) {
      await SleepCycle.create({
        ...sleepCycle,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};