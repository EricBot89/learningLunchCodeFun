const Sequelize = require('sequelize');

// initializing DB - Mess up the DB name !!!
const db = new Sequelize('postgres://localhost:5432/puppies', {
  logging: false,
});

module.exports = db

const Puppy = require('./Puppy');
const Food = require('./Food');

Puppy.belongsToMany(Food, { as: 'favFoods', through: 'puppiesFoods' });
Food.belongsToMany(Puppy, { as: 'puppies', through: 'puppiesFoods' });
Puppy.belongsTo(Puppy, { as: 'bestFriend' });
