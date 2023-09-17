// run in the terminal
// node greeter.js zhiyi nolan yiyi noli
const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`Hi there, ${arg}`)
}