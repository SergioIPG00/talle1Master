const Router = require('express');
const model = require('../models/user');
const user = require('../models/user');

const router = Router();

router.get('/', (req,res) => {
    res.send('hello')
})

router.post('/user', (req,res) =>{
    const user = model(req.body);
    
    if(user.first_name != undefined && user.last_name != undefined && 
        user.email != undefined && user.gender != undefined && user.married_status != undefined){
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
    }else{
        return res.status(401).json({ message: 'no fue posible crear el usuario por falta de informacion' });
    }
});

router.get('/listUser', async (req,res) =>{
    var body = req.body;
    model.find(body).then(function(doc){
        res.send(doc);
    });
});

router.put('/:documentNumbre', async (req,res) =>{    
    let documentNumber = req.params.documentNumbre;

    if (!documentNumber) {
        return res.status(400).json({ message: 'Número de documento inválido' });
    }
       
    try{
        let user = await model.findOne({ documentNumbre: documentNumber });
        var creado = false;
        if(user == null){
            user = new model();
            user.documentNumbre = documentNumber;
            creado= true;
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;
            user.email = req.body.email;
            user.gender = req.body.gender;
            user.married_status = req.body.married_status;
            
        }else{
            if(req.body.first_name != undefined){
                user.first_name = req.body.first_name;
            } 
            if (req.body.last_name != undefined){
                user.last_name = req.body.last_name;
            } 
            if(req.body.email != undefined){
                user.email = req.body.email;
            } 
            if(req.body.gender != undefined){
                user.gender = req.body.gender;
            }
            if( req.body.married_status != undefined){
                user.married_status = req.body.married_status;
            }
        }
                
        if(user.first_name != undefined && user.last_name != undefined && 
            user.email != undefined && user.gender != undefined && user.married_status != undefined){
            user.save()

            if(creado){
                return res.status(201).json({ message: 'usuario creado correctamente' }); 
            }else{
                return res.status(200).json({ message: 'usuario actualizado correctamente' });
            }
        }else{
            return res.status(401).json({ message: 'no fue posible actualizar o crear el usuario por falta de informacion' });
        }
    }
    catch(error){
        res.status(400).json({ message:'No es posible actualizar el usuario'});
    }           
});

router.delete('/:documentNumbre', async (req, res)=>{    
    let documentNumber = req.params.documentNumbre;

    if (!documentNumber) {
        return res.status(400).json({ message: 'Número de documento inválido' });
    }

    try{
        const documento = await model.findOneAndDelete({ documentNumbre: documentNumber });
        
        if (!documento) {
            return res.status(404).json({ message: 'numero no encontrado' });
        }else{
            return res.status(200).json({ message: 'Documento eliminado correctamente' });
        }       
    }catch(error){
        return res.status(400).json({ message: "fallo" });
    }
})

module.exports = router;