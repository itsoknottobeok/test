const fs = require('fs')
const folderName = process.argv[2] || "project"

// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// fs.mkdir('./tmp/a/apple', { recursive: true }, (err) => {
//     console.log("In the callback");
//   if (err) throw err;
// });

// console.log("After mkdir")

fs.mkdirSync(folderName);