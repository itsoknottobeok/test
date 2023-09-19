const express = require("express");
const app = express();

app.use((req, res) => {
    res.send('<h1>This is the webpage you requested</h>');
})

app.listen(3000, () => {
    console.log("Listening on port 3000...")
})