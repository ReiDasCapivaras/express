const express = require('express');
const app = express;
const port = 3000;

router.use((req, res, next) =>{
    console.log("Horário: ", Date.now());
    next();
});

app.get('/', (req, res) => {

})