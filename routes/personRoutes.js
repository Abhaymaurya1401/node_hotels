const express = require('express');
const router = express.Router();
const Person = require('./../models/person');


router.post('/',async(req, res) => {
    try{
        const data = req.body;
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('data saves successfully');
        res.status(200).send(response);

    }catch(err){
        console.log('err');
        res.status(500).json({error:"internal server error"});
    }

   
});

router.get('/' , async(req, res) => {
    try{
        const data =await Person.find();
        console.log('data fetched successfully');
        res.status(200).json(data);

    }catch(err){
        console.log('err');
        res.status(500).json({error:"internal server error"});
    }
});
router.get('//:workType', async(req, res) => {
    try{
        const workType = req.params.workType;
        if(workType=='chef'|| workType=='water'|| workType=='manager'){

            const response = await Person.find({workType});
                console.log('data fetched successfully');
                res.status(200).json(response);


        }else{
            res.status(400).json({error:"Invalid workType"});
        }

    }catch(err){
        console.log('err');
        res.status(500).json({error:"internal server error"});
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const id = req.params.id;
       const updatedPersonDate = req.body;
       const response = await Person.findByIdAndUpdate(personId,updatedPersonDate,{
        new:true, // return updated document
        runValidators:true, // Run mongoose validators
    })

    if(!response){
        return res.status(404).json({error:"person not found"});
    }
            console.log('data updated successfully');
             res.status(200).json(response);
    }catch(err){
    console.log('err');
    res.status(500).json({error:"internal server error"});
    }
})


router.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const response = await Person.findByIdAndRemove(personId);
        if(!response){
            return res.status(404).json({error:"person not found"});
        }
        console.log('data deleted successfully');
        res.status(200).json({message:"person deleted successfully"});
    }catch(err){
        console.log('err');
        res.status(500).json({error:"internal server error"});
    }
})
module.exports = router;