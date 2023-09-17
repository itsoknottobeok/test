const fs = require('fs')
const folderName = process.argv[2] || 'project'

// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// fs.mkdir('./tmp/a/apple', { recursive: true }, (err) => {
//     console.log("In the callback");
//   if (err) throw err;
// });

// console.log("After mkdir")

try {
    fs.mkdirSync(folderName);
    console.log(`${folderName}/index.html`);
    // it's a string not sure why getting an error
    fs.writeFileSync(`${folderName}/index.html`);
    fs.writeFileSync(`${folderName}/app.js`);
    fs.writeFileSync(`${folderName}/styles.css`);
} catch (e) {
    console.log("Something went wrong!")
    console.log(e);
}