// zod input form end users
// npm install zod
const z = require('zod')


const createTodo = z.object({
    title: z.string(),
    description: z.string()
})

const updateTodo = z.object({
    id: z.string(),
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}


/*
{
   title : string
   description: string
}
{
    id: string // specific todo mark as completed
}
*/