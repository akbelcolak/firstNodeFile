const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    const name = req.query.name || 'stranger';
    const number = Math.round(Math.random() * 100)
//res.end(`Hello ${name} !\n Welcome Node \n Your lucky number today is ${number}`);
const result = {status: 'ok', message: `Hello ${name}, your lucky number is: ${number}`};
res.json(result);
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}/ `);
});
