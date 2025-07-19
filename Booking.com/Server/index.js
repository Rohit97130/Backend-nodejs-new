
const express = require('express');

require('dotenv').config();
console.log('Environment variables loaded:', process.env.Dburl);

require('./config/Db_conn.js');

const app = express();

const user_router = require('./routes/User_routes.js');
app.use(express.json());
app.use('/api/users' , user_router);




const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("Server is running on port 5000");
})