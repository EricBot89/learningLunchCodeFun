const Sequelize = require('sequelize');

// initializing DB - Mess up the DB name !!!

// const db = new Sequelize('postgres://localhost:5432/puppy', {
//   logging: false,
// });

// We'll define associations after we import them here

// const Puppy = require('./models/Puppy');
// const Food = require('./models/Food');

// this will put a foreign key for parkId in the Puppy model
// and give Puppy .setPark() and .getPark() instance methods

// this will give Park the magic methods for addPuppy, etc.
// but we already have a foreign key for parkId in the Puppy model, so it will maintain
// the 1:m relationship

// Puppy to food M:M associations
// stored in the same-named join table: 'puppiesFoods'
// the `through` property is required in `belongsToMany` associations
// aliased differently in each model

// Associateions - Start with setting up just the "through" and then bring in the "as" to show difference

// Puppy.belongsToMany(Food, { as: 'favFoods', through: 'puppiesFoods' });
// Food.belongsToMany(Puppy, { as: 'puppies', through: 'puppiesFoods' });

// Puppies can have a best friend Puppy
// in this case, you always need to alias the association

// Puppy.belongsTo(Puppy, { as: 'bestFriend' });

module.exports = db;
