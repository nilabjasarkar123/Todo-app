const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express()
const port = 3000

app.use(express.json());

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsedPaylaod = createTodo.safeParse(createPayload);
    if(!parsedPaylaod.success){
        res.status(411).json({
            msg : "You send wrong inputs",
        })
        return;
    }
    // put it in mongodb

})

app.get('/todos', (req, res) => {
    res.send("Hello world")
})

app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsedPaylaod = updateTodo.safeParse(updatePayload);
    if(!parsedPaylaod.success){
        res.status(411).json({
            msg : "You already completed",
        })
        return;
    }
    // put it in mongodb
})
app.listen(port, ()=>{
    
})