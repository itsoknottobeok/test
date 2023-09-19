const express = require("express");
const app = express();

// this matches every single request
// app.use((req, res) => {
//     res.send('<h1>This is the webpage you requested</h>');
// })

app.get('/', (req, res) => {
    res.send('<h1>This is a home page</h>');
})

app.get('/cats', (req, res) => {
    res.send('<h1>Meow</h>');
})

app.post('/cats', (req, res) => {
    res.send('<h1>This is a POST request for /cats</h>')
})

app.get('/dogs', (req, res) => {
    res.send('<h1>Woof</h>');
})

// match every GET request
app.get('*', (req, res) => {
    res.send('<h1>The path doesn\'t exist...</h>');
})

app.listen(3000, () => {
    console.log("Listening on port 3000...")
})