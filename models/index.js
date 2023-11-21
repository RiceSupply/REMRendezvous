const User = require('./user');
const SleepCycle = require('./sleepCycle');

User.hasMany(SleepCycle, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

SleepCycle.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = {
  User,
  SleepCycle,
}