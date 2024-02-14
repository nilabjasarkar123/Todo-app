const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.post('/todo', (req, res) => {
    res.send("Hello world")
})

app.get('/todos', (req, res) => {
    res.send("Hello world")
})

app.put('/completed', (req, res) => {
    res.send("Hello world")
})
app.listen(port, ()=>{
    console.log(`app listning on port ${port}`)
})