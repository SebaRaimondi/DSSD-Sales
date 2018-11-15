const Sale = require('../models').Sale;

module.exports = {
  list(req, res) {
    return Sale.findAll()
      .then((sales) => res.status(200).send(sales))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Sale
      .findById(req.params.id)
      .then((sale) => {
        if (!sale) {
          return res.status(404).send({
            message: 'Sale Not Found',
          });
        }
        return res.status(200).send(sale);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Sale
      .create({
        class_name: req.body.class_name,
      })
      .then((sale) => res.status(201).send(sale))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Sale
      .findById(req.params.id)
      .then((sale) => {
        if (!sale) {
          return res.status(404).send({
            message: 'Sale Not Found',
          });
        }
        return sale
          .update({
            class_name: req.body.class_name || sale.class_name,
          })
          .then(() => res.status(200).send(sale))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Sale
      .findById(req.params.id)
      .then(sale => {
        if (!sale) {
          return res.status(400).send({
            message: 'Sale Not Found',
          });
        }
        return sale
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
