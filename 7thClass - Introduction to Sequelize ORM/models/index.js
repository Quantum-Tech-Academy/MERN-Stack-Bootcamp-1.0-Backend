const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  username: "root",
  password: "toooooor",
  database: "mern_bootcamp_2",
});

sequelize.authenticate().then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.log(err);
})

sequelize.sync().then(() => {
    console.log("Syncing is completed successfully");
}).catch(err => {
    console.log(err)
}) 

module.exports = sequelize;
