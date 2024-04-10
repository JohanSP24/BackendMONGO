const mongoose = require('mongoose');
require('dotenv').config();

//conexion con mongoDB
const conectarBD = ()=> {
    mongoose 
    .connect(process.env.DB_Mongis)
    .then(()=> console.log('Estamos conectados con mongo ;)'))
    .catch((err)=>console.error(err))
}

module.exports = conectarBD;
