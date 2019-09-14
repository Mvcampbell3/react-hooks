const router = require("express").Router();
const api_routes = require("./user_routes");

router.use("/user", api_routes);

module.exports = router;