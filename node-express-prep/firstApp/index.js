const express = require("express");
const app = express();

// this matches every single request
// app.use((req, res) => {
//     res.send('<h1>This is the webpage you requested</h>');
// })

app.get('/', (req, res) => {
    res.send('<h1>This is a home page</h>');
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing post ID: ${postId} on the ${subreddit} subreddit`);
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

// query strings: after ? in url
// http://localhost:3000/search/?q=happy
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send(`<h1>Nothing found if nothing searched</h>`);
        // end after res.send
    }
    res.send(`<h1>Search results for: ${q}</h>`);
})

// match every GET request
app.get('*', (req, res) => {
    res.send('<h1>The path doesn\'t exist...</h>');
})

app.listen(3000, () => {
    console.log("Listening on port 3000...")
})