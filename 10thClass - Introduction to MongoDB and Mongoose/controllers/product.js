const path = require("path");
const Products = require("../models/product");
const { Types } = require("mongoose");

module.exports = {
    get: async function (req, res) {
        try {
            const products = await Products.find({
                available: true
            });
            res.status(200).send({ products })
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    },
    getOne: async function (req, res) {
        try {
            const { productId } = req.params;
            const product = await Products.findOne({
                _id: productId
            })
            res.status(200).send({ product })
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    },
    post: async function (req, res) {
        try {
            const { name, price, available } = req.body;
            const product = await Products.create({
                _id: new Types.ObjectId(),
                name: name,
                price: price,
                available
            })
            res.status(201).send({ product })
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    },
    put: async function (req, res) {
        try {
            const { name, price, available } = req.body;
            const { productId } = req.params;
            await Products.updateOne({
                _id: productId
            }, {
                name,
                price,
                available
            })
            res.status(200).send("Product updated successfully")
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    },
    delete: async function (req, res) {
        try {
            const { productId } = req.params;
            await Products.findByIdAndDelete(productId)
            res.status(200).send("Product deleted successfully")
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    }
}