const db = require('../../data/db-config');

exports.getAll = () => {
  // DO YOUR MAGIC
  return db('cars');
}

exports.getById = id => {
  // DO YOUR MAGIC
  return db('cars').where('id', id).first();
}

exports.create = car => {
  // DO YOUR MAGIC
  return db('cars').insert(car)
    .then(result => {
      return this.getById(result[0]);
    });
}

exports.findByValue = filter => {
  return db('cars').where(filter);
}
