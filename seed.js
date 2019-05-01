// importing Bluebird promises so we can Promise.map
const Promise = require('bluebird');
// bring in the db and all the Models to seed
const db = require('./models/db');
const Puppy = require('./models/Puppy');
const Food = require('./models/Food');

// each of the following array will be iterated and Created
const puppyData = [
  {
    firstName: 'Puppy',
    lastName: 'Doggo',
    age: 1,
  },
  {
    firstName: 'Pupster',
    lastName: 'Puppo',
    age: 2,
  },
  {
    firstName: 'Mr.',
    lastName: 'Puppyface',
    age: 3,
  },
  {
    firstName: 'Ham',
    lastName: 'Sandwich',
    age: 1,
  },
  {
    firstName: 'Jon',
    lastName: 'MacPuppald',
    age: 2,
  },
  {
    firstName: 'Omri',
    lastName: 'Puppstein',
    age: 1,
  },
];

const foodData = [
  {
    name: 'pizza',
    deliciousness: 4,
  },
  {
    name: 'dumplings',
    deliciousness: 5,
  },
  {
    name: 'lettuce',
    deliciousness: 3,
  },
  {
    name: 'kao soi',
    deliciousness: 5,
  },
  {
    name: 'cheetos',
    deliciousness: 5,
  },
]


// We will go through the Models one by one and create an instance
// for each element in the array. Look below for a commented out version of how to do this in one slick nested Promise.

// Sync and restart db before seeding
db.sync({ force: true })
.then(() => {
  console.log('synced DB and dropped old data');
})
// here, we go through all the models one by one, create each
// element from the seed arrays above, and log how many are created
.then(() => {
  return Promise.map(puppyData, puppy => Puppy.create(puppy))
})
.then(createdPuppies => {
  console.log(`${createdPuppies.length} puppies created`);
})
.then(() => {
  return Promise.map(foodData, food => Food.create(food))
})
.then(createdFoods => {
  console.log(`${createdFoods.length} foods created`);
})
.then(() => {
  console.log('Seeded successfully');
})
.catch(err => {
  console.error('Error!', err, err.stack);
})
.finally(() => {
  db.close();
  console.log('Finished!');
  return null;
});

// Nested version:
// const allData = {
//   location: locationData,
//   puppy: puppyData,
//   food: foodData,
//   park: parkData,
// }

// db.sync({force: true})
// .then(function () {
//   console.log('synced DB and dropped old data');
//   return Promise.map(Object.keys(allData), name => {
//     return Promise.map(allData[name], element => {
//       return db.model(name)
//         .create(element);
//     });
//   });
// })
// .then(function () {
//   console.log('Seeded successfully');
// })
// .catch(function(err) {
//   console.error('Error!', err, err.stack);
// })
// .finally(function() {
//   db.close();
//   console.log('Finished!');
//   return null;
// })
