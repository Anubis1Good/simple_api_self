const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname,"public")))

app.get('/',(req,res)=>{
    res.sendFile('index.html',{
        root:'public/html/'
    })
})
app.get('/users',(req,res)=>{
    const users = require('./public/docs/users.json')
    res.send(users)
})

app.listen(PORT,'localhost',()=>{
    console.log(`Server start on http://localhost:3000`)
})
