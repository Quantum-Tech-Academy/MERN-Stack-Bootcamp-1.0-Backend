const { Router } = require("express");

const router = Router();

const controllers = require("../controllers/product");

router.get("/", controllers.get)

router.post("/", controllers.post);

router.put("/:productIndex", controllers.put)

router.delete("/:productIndex", controllers.delete)

module.exports = router;