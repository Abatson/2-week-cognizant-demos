'use strict';

const fs = require('fs')

let rawData = fs.readFileSync('./MOCK_DATA.json')
let users = JSON.parse(rawData)
setTimeout(()=>{}, 1000)

//all ladies
for(let i = 0; i < users.length;){
    if(users[i].gender === 'Male'){
        users.splice(i, 1)//effectively an increment
    } else {
        i++;
    }
}
console.log('query 1')

//to run the next query
rawData = fs.readFileSync('./MOCK_DATA.json')
let users2 = JSON.parse(rawData)
setTimeout(()=>{}, 1000)

for(let i = 0; i < users2.length;){
    if(users2[i].gender === 'Female'){
        users2.splice(i, 1)//effectively an increment
    } else {
        i++;
    }
}

console.log('query 2')