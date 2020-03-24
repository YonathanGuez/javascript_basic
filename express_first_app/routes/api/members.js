const express = require('express')
const router = express.Router();
const members = require('../../members.js')
//Api get members
// http://localhost:3000/api/members => Postman 
router.get('/',(req,res)=>{
    res.json(members);
});

// Api connection DB
const db = require('../../db')
router.get('/user/:id', (req, res, next) => {
  db.query('SELECT * FROM company WHERE id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows[0].name)
  });
});

router.get('/alluser', (req,res, next) => {
    db.query('SELECT * FROM company', (err, result) => {
      if (err) {
        return next(err)
      }
      res.send(result.rows);
    });
  });

router.post('/username', (req, res, next) => {
    db.query('SELECT * FROM company WHERE name = $1', [req.body.name], (err, result) => {
      if (err) {
        return next(err)
      }
      res.json(result.rows[0].id)
    });
});
  

//// Part Without DB 
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