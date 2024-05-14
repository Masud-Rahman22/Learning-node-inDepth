const fs = require("fs");

fs.readFile('./texts/read.txt',"utf-8", (err,data)=>{
    if(err){
        throw Error('error reading text')
    }
    console.log(data)
    fs.writeFile('./texts/write.txt', "utf-8", (err)=>{
        if(err){
            throw Error('error reading text')
        }
    })
})