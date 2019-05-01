const router = require('express').Router();

const Puppy = require('../models/Puppy');
const Food = require('../models/Food');


// get all puppies route
// /puppies
router.get('/', async(req, res) => {
  try {
    const allPuppies = await Puppy.findAll()
    res.status(200).send(allPuppies)
  } catch (err){
    console.error(err);
    // or res.sendStatus(error)
  }
})

// get puppy by id
router.get('/:puppyId', async(req, res) => {
  try {
    const id = req.params.puppyId
    const onePuppy = await Puppy.findOne({
      where: {
        id: id
      },
        include: [Food]
    })
    res.status(200).json(onePuppy)
  } catch (err) {
    console.error(err)
    // or res.sendStatus(error)
  }
})

// post a new puppy
router.post('/', async (req, res) => {
  try {
    const newPuppy = await Puppy.create(req.body)
    // or findOrCreate({
    //   where: req.body
    // })
    res.status(201).json(newPuppy);
  } catch (err) {
      console.error(err)
    // or res.sendStatus(error)
  }
})

// update a particular puppy
router.put('/:puppyId', async (req, res) => {
  try {
    const updatedPuppy = await Puppy.update(req.body)
    res.status(200).json(updatedPuppy);
  } catch (err) {
    console.error(err);
    // or res.sendStatus(error)
  }
});

//delete Route for a single puppy
router.delete('/:puppyId', async (req, res) => {
    try {
      const deletePuppy = Puppy.destroy({
        where: {
          id: req.params.puppyId
        }
      })
      res.status(200).json(deletePuppy)
    } catch (error){
      res.sendStatus(error)
    }
})

module.exports = router;
