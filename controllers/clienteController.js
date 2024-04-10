const Cliente = require('../models/Cliente');

//funcion para buscar todos los clientes
exports.buscarClientes = async(req,res)=>{
    try {
        let cliente = await Cliente.find();
        res.json(cliente)


    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar un cliente')
    }
}


//funcion agregar clientes
exports.agregarClientes = async(req,res)=>{
    try {
        let clientes;
        clientes = new Cliente(req.body)
        await clientes.save();
        res.send(clientes);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un cliente')
    }
}

//funcion para buscar un cliente por id

exports.buscarCliente = async(req,res)=> {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente){
            res.status(404).json({msg:"ID no existe"})
            return
        }
        res.send(cliente);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar un unico cliente')
        
    }
}

exports.eliminarCliente = async(req,res)=>{
    try {
        
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente){
            res.status(404).json({msg:'Cliente no existe!!!'})
            return
        }

        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El cliente ha sido eliminado"});
        return

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al ELIMINAR un unico cliente')
        
    }
}
//Funcion para actualizar cliente

exports.actualizarCliente = async(req,res)=>{
    try {
        
        const {nombres, apellidos, documento, correo, telefono, direccion} = req.body
        let cliente = await Cliente.findById(req.params.id);

        if(!cliente){
            res.status(404).json({mesg:"el cliente no existe perrin"});
        }else{
            cliente.nombres = nombres;
            cliente.apellidos=apellidos;
            cliente.documento = documento;
            cliente.correo = correo;
            cliente.telefono = telefono;
            cliente.direccion = direccion;
            
            cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, cliente,{new:true});
            res.json(cliente);

        }

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al ACTUALIZAR un cliente')
        
    }
}