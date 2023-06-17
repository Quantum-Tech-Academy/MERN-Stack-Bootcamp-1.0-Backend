const { customers: Customers } = require("../models/index");
const moment = require("moment")
const bcrypt = require("bcryptjs");

module.exports = {
    get: async function (req, res) {
        try {
            const customers = await Customers.findAndCountAll({
            })
            res.status(200).send({
                customers
            })
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    },
    create: async function (req, res) {
        try {
            const { name, email, password, gender,  } = req.body;

            const salt = await bcrypt.genSalt(12);
            const hashedPassword = await bcrypt.hash(password, salt);

            const customer = await Customers.findOrCreate({
                where: {
                    email: email
                },
                defaults: {
                    name,
                    password: hashedPassword,
                    gender,
                    createdAt: moment().unix(),
                    updatedAt: moment().unix()
                }
            })
            res.status(200).send({
                customer
            })
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    },
}