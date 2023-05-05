const Router = require('express');
const model = require('../models/user');

const router = Router();

router.get('/', (req,res) => {
    res.send('hello')
})

router.post('/user', (req,res) =>{
    const user = model(req.body); 
       
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
   
});

module.exports = router;