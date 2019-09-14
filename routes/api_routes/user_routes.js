const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "User routes api is up and running", ok: true })
})

module.exports = router;