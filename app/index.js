const express = require('express')
      bodyParser = require('body-parser')
      ,app = express()
      ,port = process.env.PORT || 19000;

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static(__dirname + "index.html"))
app.get('/palindromo/:word', (req, res) => {
  const word = req.params.word
  const rWord = word.split("")
                    .reverse("")
                    .join("")
  if (rWord == word) {
    res.send({ "resultado": true })
  } else {
    res.send({ "resultado": false })
  }

})
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

