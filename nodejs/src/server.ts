require('dotenv').config()

const app = require(".")

const PORT = process.env.PORT || 3001

app.listen(PORT, async () => {
  console.log(`listning on port ${PORT}`)
})