const path = require("path");
const { products: Products } = require("../models");
const { Op } = require("sequelize")

module.exports = {
    get: async function (req, res) {
        try {
            const products = await Products.findAll({
                order: [["price", "ASC"]],
                where: {
                    // [Op.and]: [
                    //     {
                    //         available: true,
                    //     },
                    //     {
                    //         price: {
                    //             [Op.gt]: 100000
                    //         }
                    //     }
                    // ]
                    id: [1, 3, 5, 10]
                },
                attributes: ["id", "name", "price", "available"]
            });
            return res.status(200).send({ products })
            res.status(200).render(path.join(__dirname, "../views", "products"), { title: "Products Page", products: products })
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    },
    getOne: async function (req, res) {
        try {
            const { productId } = req.params;
            const product = await Products.findByPk(productId)
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
            let { productId } = req.params;
            productId = Number(productId);
            await Products.update({
                name,
                price,
                available
            }, {
                where: {
                    id: productId
                }
            })
            res.status(200).send("Product updated successfully")
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    },
    delete: async function (req, res) {
        try {
            let { productId } = req.params;
            productId = Number(productId);
            await Products.destroy({
                where: {
                    id: productId
                }
            })
            res.status(200).send("Product deleted successfully")
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    }
}