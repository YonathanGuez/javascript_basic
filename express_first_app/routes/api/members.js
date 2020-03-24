const express = require('express')
const router = express.Router();
const members = require('../../members.js')
//Api get members
// http://localhost:3000/api/members => Postman 
router.get('/',(req,res)=>{
    res.json(members);
});

// Get singel member
// http://localhost:3000/api/members/2 => Postman 
router.get('/:id',(req,res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id));
    
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }else{
        res.status(404).json({msg:`Member not found`});
    }
});

// Create Member 
router.post('/',(req ,res)=>{
    const newMember ={
        id: members.length +1,
        name: req.body.name
    }
    if(newMember.name){
        members.push(newMember)
    }
    else{
        res.status(400).json({msg:`create not work`});
    }
    res.json(members)
});

module.exports = router;