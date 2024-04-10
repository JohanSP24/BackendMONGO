const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');

//creamos nuestro servidor
const app = express();

//enlazar la conexion a la base de datos

conectarBD();
app.use(cors());

app.use(express.json());
app.use('/api/clientes', require('../routes/rutas'));
app.use('/api/distribuidores', require('../routes/rutasDistribuidor'));


//defino ruta principal
app.get('/', (req,res)=>{
    res.send('hola pues monde');
})
//creo puerto por si la nube o por si local
const puerto = process.env.PORT || 3000; 

app.listen(puerto,()=>{
    console.log ('Servidor Corriendo OKOK');
})



