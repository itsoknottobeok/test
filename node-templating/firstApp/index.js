const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // look in views directory by default
    res.render('home');
})

app.listen(3000, () => {
    console.log("Listening...");
})