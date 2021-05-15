const express = require('express')
const app = express()

app.listen(9900, ()=> {
    console.log("Server started http://localhost:9900");
})

app.use(express.static(__dirname + '/public'))


app.get('/', (req,res)=> {
    res.redirect('/home')
}) 


app.get('/home',(req,res)=> {
    res.sendFile(__dirname + '/public/Home/')
}) 
app.get('/about',(req,res) => {
    res.sendFile(__dirname + '/public/About/')
})
app.get('/collections',(req,res)=>{
    res.sendFile(__dirname + '/public/Collections/')
})
app.get('/services',(req,res)=>{
    res.sendFile(__dirname + '/public/Services')
})

