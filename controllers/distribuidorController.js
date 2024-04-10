const Distribuidor = require('../models/Distribuidor');

//funcion para buscar todos los clientes
exports.buscarDistribuidores = async(req,res)=>{
    try {
        let distribuidor = await Distribuidor.find();
        res.json(distribuidor)


    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar los distibuidores')
    }
}


//funcion agregar distribuidores
exports.agregarDistribuidores = async(req,res)=>{
    try {
        let distribuidores;
        distribuidores = new Distribuidor(req.body)
        await distribuidores.save();
        res.send(distribuidores);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un distribuidor')
    }
}

//funcion para buscar un cliente por id

exports.buscarDistribuidor = async(req,res)=> {
    try {
        let distribuidor = await Distribuidor.findById(req.params.id);
        if (!distribuidor){
            res.status(404).json({msg:"ID no existe"})
            return
        }
        res.send(distribuidor);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar un unico distribuidor')
        
    }
}

exports.eliminarDistribuidor = async(req,res)=>{
    try {
        
        let distribuidor = await Distribuidor.findById(req.params.id);
        if (!distribuidor){
            res.status(404).json({msg:'Distribuidor no existe!!!'})
            return
        }

        await Distribuidor.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El distribuidor ha sido eliminado"});
        return

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al ELIMINAR un único distribuidor')
        
    }
}
//Funcion para actualizar cliente

exports.actualizarDistribuidor = async(req,res)=>{
    try {
        
        const {razonSocial, NIT, correo, telefono, direccion} = req.body
        let distribuidor = await Distribuidor.findById(req.params.id);

        if(!distribuidor){
            res.status(404).json({mesg:"el cliente no existe perrin"});
        }else{
            distribuidor.razonSocial = razonSocial;
            distribuidor.NIT=NIT;
            distribuidor.correo = correo;
            distribuidor.telefono = telefono;
            distribuidor.direccion = direccion;
            
            distribuidor = await Distribuidor.findOneAndUpdate({_id: req.params.id}, distribuidor,{new:true});
            res.json(distribuidor);

        }

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al ACTUALIZAR un distribuidor')
        
    }
}