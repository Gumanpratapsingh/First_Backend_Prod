const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000 ; 

const format =  require('date-format')




app.get('/', (req,res) => {
    res.send('Hello World');
    res.status(200).send("Home Page");
});
app.get('/api/v1/instagram', (req,res)=>{
    const instaSocial = {
        username: "Instagram: Guman Pratap Singh",
        followers: 660,
        follows: 60,
        date: format.asString("dd / MM hh:mm:ss", new Date())
    }
    res.status(200).json(instaSocial)
});

app.get('/api/v1/facebook', (req,res)=>{
    const instaSocial = {
        username: "Facebook: Guman Pratap Singh",
        followers: 60,
        follows: 600,
        date: format.asString("dd / MM hh:mm:ss", new Date())
    }
    res.status(200).json(instaSocial)
});

app.get('/api/v1/linkedin', (req,res)=>{
    const instaSocial = {
        username: "Linkedin: Guman Pratap Singh",
        followers: 750,
        follows: 10,
        date: format.asString("dd / MM hh:mm:ss", new Date())
    }
    res.status(200).json(instaSocial)
});



app.get('/api/v1/:token', (req,res)=>{
   console.log(req.params.token);
    res.status(200).json({param: req.params.token});
    
});
app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
});


//console.log("Hello from Gps!")