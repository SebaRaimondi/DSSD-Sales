const Sale = require('../models').Sale;

module.exports = {
    list(req, res) {
        return Sale.findAll()
            .then((sales) => res.status(200).send(sales))
            .catch((error) => res.status(400).send(error));
    },

    getById(req, res) {
        return Sale
            .findById(req.params.id)
            .then((sale) => {
                if (!sale) return res.status(404).send({
                    message: 'Sale Not Found'
                });
                return res.status(200).send(sale);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return Sale
            .create({
                productid: req.body.productid,
                quantity: req.body.quantity,
                date: req.body.date,
                price: req.body.price,
                listCaseId: req.body.listCaseId,
                couponDiscount: req.body.couponDiscount,
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
                        productid: req.body.productid || sale.productid,
                        quantity: req.body.quantity || sale.quantity,
                        date: req.body.date || sale.date,
                        price: req.body.price || sale.price,
                        listCaseId: req.body.listCaseId || sale.listCaseId,
                        couponDiscount: req.body.couponDiscount || sale.couponDiscount,
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
