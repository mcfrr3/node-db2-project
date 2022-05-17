const vinValidator = require('vin-validator');
const Cars = require('./cars-model');

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params;

  Cars.getById(id)
    .then(result => {
      if (result) {
        req.car = result;
        next();
      } else {
        res.status(404).json({ message: `car with id ${id} is not found` });
        return;
      }
    });
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin, make, model, mileage }  = req.body;

  if (vin == undefined) {
    res.status(400).json({ message: "vin is missing" });
    return;
  }
  if (make == undefined) {
    res.status(400).json({ message: "make is missing" });
    return;
  }
  if (model == undefined) {
    res.status(400).json({ message: "model is missing" });
    return;
  }
  if (!mileage || typeof(parseInt(mileage)) != 'number') {
    res.status(400).json({ message: "mileage is missing" });
    return;
  }
  next();
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;

  const isValid = vinValidator.validate(vin);

  if (!isValid) {
    res.status(400).json({ message: `vin ${vin} is invalid` });
    return;
  }
  next();
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;

  Cars.findByValue({'vin': vin})
    .then(result => {
      if (result.length > 0) {
        res.status(400).json({ message: `vin ${vin} already exists` });
      }
      next();
    })
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}