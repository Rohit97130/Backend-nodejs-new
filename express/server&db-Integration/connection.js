const mongoose = require('mongoose');


async function ConnectMongodb(url){
    
mongoose.connect(url).then(()=>{
    console.log('Connection Succesfull');
}).catch((err)=>{
    console.log('Connection Unsuccessful'); 
    console.log(err);  
})
}

module.exports = {
    ConnectMongodb
}

