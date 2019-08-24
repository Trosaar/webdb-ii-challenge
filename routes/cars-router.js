const express = require('express');

const carsDB = require('../data/dbConfig.js');

const router = express.Router();

router.post('/', (req, res) => {
  const carsData = req.body

  carsDB('cars').insert(carsData)
    .then(idArray => {
      carsDB('cars').where({ id: idArray[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry)
        })
        .catch(err => {
          res.status(500).json({ message: 'failed to get by ID' })
        })
    })
    .catch(err => {
      res.status(500).json({ message: 'failed to POST'})
    })
})

router.get('/', (req, res) => {
  carsDB('cars')
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: 'failed to retrieve cars'})
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;

  carsDB('cars').where('id', id).first()
    .then(car => {
      res.status(200).json(car)
    })
    .catch(err => {
      res.status(500).json({ message: 'failed to get car'})
    })
})

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const changes = req.body

  try {
    const updatedCarCount = await carsDB('cars')
      .where({ id })
      .update(changes);

    res.status(200).json(updatedCarCount);
  } catch(err) {
    res.status(500).json({ message: "Failed to update car" })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleteCount = await carsDB('cars').where('id', id).del();
    res.status(200).json(deleteCount);
  } catch(err) {
    res.status(500).json({ error: "Unable to delete account" })
  }
})

module.exports = router;
