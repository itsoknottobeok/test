const franc = require("franc");
const langs = require('langs');
const colors = require('colors');
// console.log(langs.all());
const inputList = []
for (let i = 2; i < process.argv.length; i++) {
    inputList.push(process.argv[i]);
}
const input = inputList.join(' ');
const langCode = franc(input);

if (langCode === 'und') {
    console.log("The text you provide is too short!".red);
} else {
    console.log(`Our best guess is: ${langs.where("3", langCode).name}`.green);
}