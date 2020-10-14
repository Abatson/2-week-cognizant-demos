'use strict';

const fs = require('fs')

let rawData = fs.readFileSync('./MOCK_DATA.json')
let users = JSON.parse(rawData)


let ladies = users.filter((ele)=>{
    return ele.gender === 'Female'
})

if(true){
    //making a shallow copy
    [...users]//it makes a new array that points to all the same elements as the previous one
            // because the users are objects, we would have to spread those as well
}

//make a deep copy
//a deep copy goes all the way down
let newArr = []
for(let user of users){
    newArr.push({...user})
}