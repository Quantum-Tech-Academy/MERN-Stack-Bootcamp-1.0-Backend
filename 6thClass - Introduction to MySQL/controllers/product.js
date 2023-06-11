const path = require("path");
const connection = require('../models/index');

module.exports = {
    get: async function (req, res) {
        try {
            const db = await connection();
            const [products] = await db.execute("SELECT * FROM products");
            res.status(200).render(path.join(__dirname, "../views", "products"), { title: "Products Page", products: products })
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    },
    getOne: async function (req, res) {
        try {
            const { productId } = req.params;
            const db = await connection();
            const [product] = await db.execute(`SELECT * FROM products WHERE ID = ${productId}`);
            res.status(200).send({ product })
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    },
    post: async function (req, res) {
        try {
            const { name, price } = req.body;
            const date = new Date();
            const db = await connection();
            await db.execute(`INSERT INTO products (name, price, createdAt, updatedAt) VALUES ('${name}', ${price}, '${date.toISOString().slice(0, 10)}', '${date.toISOString().slice(0, 10)}')`)
            res.status(201).send("Product created successfully")
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    },
    put: async function (req, res) {
        try {
            const { name, price } = req.body;
            let { productId } = req.params;
            productId = Number(productId);
            const db = await connection();
            await db.execute(`UPDATE products SET name = '${name}', price = ${price} WHERE ID = ${productId}`)
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
            const db = await connection();
            await db.execute(`DELETE FROM products WHERE id = ${productId}`)
            res.status(200).send("Product deleted successfully")
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    }
}