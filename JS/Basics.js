const fs=require('fs');
function print(err, data) {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
}
fs.readFile('./Basics.txt', 'utf8',print);
console.log("Hello World");



//promisified version of- settimeout fetch fs.readFile 
// callbacks asynchronous 

