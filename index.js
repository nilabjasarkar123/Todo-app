const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express()
const port = 3000

app.use(express.json());

app.post('/todo',async, (req, res) => {
    const createPayload = req.body;
    const parsedPaylaod = createTodo.safeParse(createPayload);
    if(!parsedPaylaod.success){
        res.status(411).json({
            msg : "You send wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await.todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completd: false,
    })
    res.json({
        msg: "Todo created"
    })
})

app.get('/todos', async, (req, res) => {
    const todos = await.todo.find({})
    res.json({
        todos
    })
})

app.put('/completed', async, (req, res) => {
    const updatePayload = req.body;
    const parsedPaylaod = updateTodo.safeParse(updatePayload);
    if(!parsedPaylaod.success){
        res.status(411).json({
            msg : "You send wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await.todo.update({
        _id: req.body.id
        }, {
            completd: true,
    })
    
    res.json({
        msg: "Todo marked completed"
    })

    
})
app.listen(port, ()=>{
    
})