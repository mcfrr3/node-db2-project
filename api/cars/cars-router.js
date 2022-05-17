// DO YOUR MAGIC
const Cars = require('./cars-model');
const router = require('express').Router();
const middleware = require('./cars-middleware');

router.get('/', (req, res) => {
  Cars.getAll()
    .then(result => {
      res.json(result);
    })
});

router.get('/:id', middleware.checkCarId, (req, res) => {
  res.json(req.car);
});

router.post('/', 
  middleware.checkCarPayload, 
  middleware.checkVinNumberValid, 
  middleware.checkVinNumberUnique, 
  (req, res) => {
    Cars.create(req.body)
      .then(result => {
        res.json(result);
      })
});

module.exports = router;
