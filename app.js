const { writeFile } = require('fs');
const fs = require('fs')
const https = require('https');
https.get('https://jsonplaceholder.typicode.com/posts',(resp)=>{
    let data = '';
resp.on('data',(chunk)=>{
    data +=chunk;
});
resp.on('end',()=>{
  
writeFile('./result/posts.txt',data,(error)=>{
    if(error){
        console.log(error)
        return 
    }
    
})

});
resp.on("error",(err)=>{
    console.log("error:" + err)
})

});