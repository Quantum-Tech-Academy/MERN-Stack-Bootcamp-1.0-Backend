const { Router } = require("express");

const router = Router();

const controllers = require("../controllers/shop");

router.get("/", controllers.get);
router.post("/", controllers.create)

module.exports = router;