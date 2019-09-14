const express = require("express");
const app = express()
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

app.get("/", (req, res) => {
  res.json({ ok: true })
})

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`)
})