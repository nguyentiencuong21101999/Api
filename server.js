const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
  console.log(1)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example apsssp listening at http://localhost:${port}`)
})